// ============================================
// 희라링고 공용 상태 관리 + 헬퍼
// ============================================

const STORAGE_KEY = "heeralingo";

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// "YYYY-MM-DD" 두 날짜 사이의 일수 차이 (b - a)
function daysBetween(a, b) {
  const d1 = new Date(a + "T00:00:00");
  const d2 = new Date(b + "T00:00:00");
  return Math.round((d2 - d1) / 86400000);
}

function freshQuests() {
  return {
    date: todayStr(),
    solvedCount: 0,
    lessonCount: 0,
    listenCorrect: 0,
    claimed: { solve: false, lesson: false, listen: false },
  };
}

function defaultState() {
  return {
    gems: 0,
    streak: 0,
    lastActiveDate: null, // 연속 학습(스트릭) 계산 기준, 마지막으로 레슨을 완료한 날짜
    activityDates: [], // 학습한 날짜 전체 기록 ("YYYY-MM-DD"), 캘린더 표시용
    xp: 0,
    progress: { section: 0, unit: 0, lesson: 0 }, // 다음에 풀 레슨 위치 (0-index)
    quests: freshQuests(),
    chests: 0,
  };
}

function loadState() {
  let state;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state = raw ? JSON.parse(raw) : defaultState();
  } catch (e) {
    state = defaultState();
  }

  // 필드 보정 (구버전 데이터 대비)
  const def = defaultState();
  state = Object.assign({}, def, state);
  state.quests = Object.assign({}, def.quests, state.quests || {});
  state.quests.claimed = Object.assign({}, def.quests.claimed, (state.quests && state.quests.claimed) || {});
  state.progress = Object.assign({}, def.progress, state.progress || {});
  state.progress = clampProgress(state.progress);
  delete state.currentNode; // 구버전 잔여 필드 정리

  // 날짜 바뀌면 퀘스트 리셋
  if (state.quests.date !== todayStr()) {
    state.quests = freshQuests();
  }

  // 어제까지도 학습하지 않고 하루 이상 건너뛰었으면 스트릭이 끊긴 것으로 처리
  if (state.lastActiveDate && daysBetween(state.lastActiveDate, todayStr()) > 1) {
    state.streak = 0;
  }

  return state;
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  syncAndroidWidget(state);
}

// 안드로이드 앱(WebView) 안에서 열렸을 때만 존재하는 다리.
// 일반 브라우저/GitHub Pages에서는 window.AndroidWidget이 없으니 그냥 아무 일도 안 함.
function syncAndroidWidget(state) {
  if (window.AndroidWidget && typeof window.AndroidWidget.updateStreak === "function") {
    window.AndroidWidget.updateStreak(state.streak, state.gems);
  }
}

// 레슨 완료 시 호출. 오늘 처음 학습한 것이면 스트릭을 갱신하고 true를 반환.
// (어제도 학습했으면 +1, 하루 이상 건너뛰었으면 1로 리셋, 오늘 이미 기록했으면 아무것도 안 함)
function recordActivity(state) {
  const today = todayStr();
  if (!state.activityDates.includes(today)) state.activityDates.push(today);
  if (state.lastActiveDate === today) return false;
  const gap = state.lastActiveDate ? daysBetween(state.lastActiveDate, today) : null;
  state.streak = gap === 1 ? state.streak + 1 : 1;
  state.lastActiveDate = today;
  return true;
}

// ---- 일일 퀘스트 ----
const QUEST_DEFS = [
  { key: "solve", icon: "🧩", label: "문제 15개 풀기", goal: 15, getValue: (s) => s.quests.solvedCount },
  { key: "lesson", icon: "📘", label: "레슨 2개 완료하기", goal: 2, getValue: (s) => s.quests.lessonCount },
  { key: "listen", icon: "🎧", label: "듣기 문제 8개 정답 맞히기", goal: 8, getValue: (s) => s.quests.listenCorrect },
];

// 달성했지만 아직 상자를 못 받은 퀘스트를 자동으로 지급. 새로 지급된 상자 개수를 반환.
function claimCompletedQuests(state) {
  let claimed = 0;
  QUEST_DEFS.forEach((q) => {
    if (state.quests.claimed[q.key]) return;
    if (q.getValue(state) >= q.goal) {
      state.quests.claimed[q.key] = true;
      state.chests++;
      claimed++;
    }
  });
  return claimed;
}

// ---- 섹션/유닛/레슨 진행 헬퍼 ----
function getUnit(s, u) {
  const section = SECTIONS[s];
  return section ? section.units[u] : undefined;
}

// progress가 SECTIONS 범위를 벗어나면 안전한 값으로 보정 (data.js가 줄어든 경우 대비)
function clampProgress(p) {
  if (!SECTIONS[p.section]) return { section: 0, unit: 0, lesson: 0 };
  if (!getUnit(p.section, p.unit)) return { section: p.section, unit: 0, lesson: 0 };
  const maxLesson = getUnit(p.section, p.unit).lessons - 1;
  if (p.lesson > maxLesson) return { section: p.section, unit: p.unit, lesson: maxLesson };
  return p;
}

// a가 b보다 앞이면 -1, 같으면 0, 뒤면 1
function comparePos(a, b) {
  if (a.section !== b.section) return a.section < b.section ? -1 : 1;
  if (a.unit !== b.unit) return a.unit < b.unit ? -1 : 1;
  if (a.lesson !== b.lesson) return a.lesson < b.lesson ? -1 : 1;
  return 0;
}

// 레슨 완료 시 다음 위치로 진행 (마지막 레슨이면 그대로 유지)
function advanceProgress(state) {
  const p = state.progress;
  const section = SECTIONS[p.section];
  const unit = section.units[p.unit];
  if (p.lesson < unit.lessons - 1) {
    p.lesson++;
  } else if (p.unit < section.units.length - 1) {
    p.unit++;
    p.lesson = 0;
  } else if (p.section < SECTIONS.length - 1) {
    p.section++;
    p.unit = 0;
    p.lesson = 0;
  }
}

// ---- TTS ----
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ko-KR";
  utter.rate = 0.9;

  const voices = window.speechSynthesis.getVoices();
  const koVoice = voices.find((v) => v.lang === "ko-KR") || voices.find((v) => v.lang && v.lang.startsWith("ko"));
  if (koVoice) utter.voice = koVoice;

  window.speechSynthesis.speak(utter);
}

// 일부 브라우저는 getVoices()가 비동기 로드됨 → 미리 워밍업
if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ---- 효과음 (audios/이름.mp3) ----
// correct / wrong / cheering / pair1~4 / lessonend
function playSfx(name) {
  try {
    const audio = new Audio(`audios/${name}.mp3`);
    audio.play().catch(() => {});
  } catch (e) {
    // 재생 실패는 무시 (효과음 없이도 앱은 정상 동작)
  }
}

// ---- 공용 UI 렌더 ----
function renderTopBar(state) {
  const el = document.querySelector(".top");
  if (!el) return;
  el.innerHTML = `
    <span><i class="fa-solid fa-fire" style="color:#df8b1c"></i> ${state.streak}</span>
    <span><i class="fa-solid fa-gem" style="color:#00b7ff"></i> ${state.gems}</span>
  `;
}

// 모바일 하단탭 배지 + 데스크탑 사이드바 배지 전부 갱신 (페이지에 존재하는 만큼)
function renderChestBadge(state) {
  document.querySelectorAll(".tab-badge").forEach((badge) => {
    badge.style.display = state.chests > 0 ? "block" : "none";
  });
}

// active: "home" | "quest" — 현재 페이지에 해당하는 탭을 강조 표시
function renderBottomNav(active) {
  const el = document.querySelector(".bottom");
  if (!el) return;
  const homeColor = active === "home" ? "#4db4ff" : "#727272";
  const questColor = active === "quest" ? "#4db4ff" : "#727272";
  el.innerHTML = `
    <a href="index.html"><i class="fa-solid fa-house" style="color:${homeColor}"></i></a>
    <a href="quest.html" style="position:relative;">
      <i class="fa-solid fa-box" style="color:${questColor}"></i>
      <span class="tab-badge" style="display:none;"></span>
    </a>
    <a href="#"><i class="fa-solid fa-trophy" style="color:#727272"></i></a>
    <a href="#"><i class="fa-solid fa-user" style="color:#727272"></i></a>
  `;
}

// active: "home" | "quest" — 데스크탑(≥900px)에서 보이는 왼쪽 세로 메뉴, 라벨 포함
function renderSideNav(active) {
  const el = document.querySelector("#side-nav");
  if (!el) return;
  el.innerHTML = `
    <div class="side-nav-logo">희라링고</div>
    <a href="index.html" class="side-nav-item ${active === "home" ? "active" : ""}">
      <i class="fa-solid fa-house"></i><span>홈</span>
    </a>
    <a href="quest.html" class="side-nav-item ${active === "quest" ? "active" : ""}">
      <i class="fa-solid fa-box"></i><span>퀘스트</span>
      <span class="tab-badge" style="display:none;"></span>
    </a>
    <a href="#" class="side-nav-item"><i class="fa-solid fa-trophy"></i><span>랭킹</span></a>
    <a href="#" class="side-nav-item"><i class="fa-solid fa-user"></i><span>프로필</span></a>
  `;
}

// 이번 달 학습 캘린더 그리드 HTML. 학습한 날은 주황색, 안 한 날은 흰색.
function buildCalendarHtml(state) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = todayStr();
  const activitySet = new Set(state.activityDates || []);

  let html = '<div class="calendar-grid">';
  ["일", "월", "화", "수", "목", "금", "토"].forEach((d) => {
    html += `<div class="cal-dow">${d}</div>`;
  });
  for (let i = 0; i < firstDow; i++) {
    html += '<div class="calendar-day empty"></div>';
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    let cls = "calendar-day";
    if (activitySet.has(dateStr)) cls += " done";
    if (dateStr === today) cls += " today";
    html += `<div class="${cls}">${d}</div>`;
  }
  html += "</div>";
  return html;
}

// 데스크탑(≥900px)에서 보이는 오른쪽 상태바: 보석/연속학습 + 캘린더
function renderStatusPanel(state) {
  const el = document.querySelector("#status-panel");
  if (!el) return;
  el.innerHTML = `
    <div class="status-stat">
      <i class="fa-solid fa-gem" style="color:#1cb0f6"></i>
      <div>보석<b>${state.gems}</b></div>
    </div>
    <div class="status-stat">
      <i class="fa-solid fa-fire" style="color:#ff9600"></i>
      <div>연속 학습<b>${state.streak}일</b></div>
    </div>
    <div class="status-calendar">
      <h3>이번 달 학습</h3>
      ${buildCalendarHtml(state)}
    </div>
  `;
}

// 배열에서 랜덤 n개 뽑기 (중복 없이)
function sample(arr, n) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
