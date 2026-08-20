// ============================================
// 희라링고 데이터 파일 — 자유롭게 수정하세요!
// ============================================

// ---- 응원 (문제 3~4개마다 랜덤으로 하나 표시) ----
// 텍스트: { type: "text", text: "문구", emoji: "🎉" }
// 영상:   { type: "video", src: "cheers/파일명.mp4" }
//          → cheers 폴더에 mp4 파일을 넣고 파일명만 적으면 됩니다.
const CHEERS = [
  // { type: "text", text: "잘하고 있어요!", emoji: "🎉" },
  // { type: "text", text: "대단해요, 계속 가요!", emoji: "🔥" },
  // { type: "text", text: "완벽해요!", emoji: "⭐" },
  // { type: "text", text: "실력이 늘고 있어요!", emoji: "💪" },
  // { type: "text", text: "역시 최고!", emoji: "🏆" },
  { type: "video", src: "cheers/cheering.mp4" },
];

// ---- 학습 구조: 섹션(난이도) → 유닛(주제) → 레슨 ----
// 레슨은 해당 유닛의 words 풀에서 랜덤으로 문제를 뽑아 구성됩니다.
// 난이도는 섹션이 올라갈수록 단어 자체가 길고 복잡해지는 방식으로 표현됩니다.
//
// 단어의 그림은 기본적으로 emoji를 사용하지만, image 필드를 추가하면
// 그림-글 짝 맞추기 문제에서 이모지 대신 실제 이미지를 보여줍니다.
// images 폴더에 파일을 넣고 아래처럼 경로만 적으면 됩니다.
//   { word: "사과", emoji: "🍎", image: "images/사과.jpg" }
// image가 없으면 자동으로 emoji가 사용됩니다.
const SECTIONS = [
  {
    title: "섹션 1 · 기초",
    color: "#58cc02",
    shadow: "#46a302",
    units: [
      {
        title: "과일",
        lessons: 10,
        words: [
          {
            word: "사과",
            emoji: "🍎",
            image: "images/섹션1/유닛1_과일/사과.svg",
          },
          {
            word: "바나나",
            emoji: "🍌",
            image: "images/섹션1/유닛1_과일/바나나.svg",
          },
          {
            word: "포도",
            emoji: "🍇",
            image: "images/섹션1/유닛1_과일/포도.svg",
          },
          {
            word: "딸기",
            emoji: "🍓",
            image: "images/섹션1/유닛1_과일/딸기.svg",
          },
          {
            word: "수박",
            emoji: "🍉",
            image: "images/섹션1/유닛1_과일/수박.svg",
          },
          {
            word: "복숭아",
            emoji: "🍑",
            image: "images/섹션1/유닛1_과일/복숭아.svg",
          },
          {
            word: "레몬",
            emoji: "🍋",
            image: "images/섹션1/유닛1_과일/레몬.svg",
          },
          {
            word: "체리",
            emoji: "🍒",
            image: "images/섹션1/유닛1_과일/체리.svg",
          },
        ],
      },
      {
        title: "동물",
        lessons: 9,
        words: [
          {
            word: "강아지",
            emoji: "🐶",
            image: "images/섹션1/유닛2_동물/강아지.svg",
          },
          {
            word: "고양이",
            emoji: "🐱",
            image: "images/섹션1/유닛2_동물/고양이.svg",
          },
          {
            word: "토끼",
            emoji: "🐰",
            image: "images/섹션1/유닛2_동물/토끼.svg",
          },
          { word: "곰", emoji: "🐻", image: "images/섹션1/유닛2_동물/곰.svg" },
          {
            word: "사자",
            emoji: "🦁",
            image: "images/섹션1/유닛2_동물/사자.svg",
          },
          {
            word: "코끼리",
            emoji: "🐘",
            image: "images/섹션1/유닛2_동물/코끼리.svg",
          },
          {
            word: "호랑이",
            emoji: "🐯",
            image: "images/섹션1/유닛2_동물/호랑이.svg",
          },
          {
            word: "판다",
            emoji: "🐼",
            image: "images/섹션1/유닛2_동물/판다.svg",
          },
        ],
      },
      {
        title: "자연",
        lessons: 11,
        words: [
          {
            word: "태양",
            emoji: "☀️",
            image: "images/섹션1/유닛3_자연/태양.svg",
          },
          { word: "달", emoji: "🌙", image: "images/섹션1/유닛3_자연/달.svg" },
          { word: "별", emoji: "⭐", image: "images/섹션1/유닛3_자연/별.svg" },
          {
            word: "나무",
            emoji: "🌳",
            image: "images/섹션1/유닛3_자연/나무.svg",
          },
          { word: "꽃", emoji: "🌸", image: "images/섹션1/유닛3_자연/꽃.svg" },
          {
            word: "구름",
            emoji: "☁️",
            image: "images/섹션1/유닛3_자연/구름.svg",
          },
          {
            word: "무지개",
            emoji: "🌈",
            image: "images/섹션1/유닛3_자연/무지개.svg",
          },
          { word: "산", emoji: "⛰️", image: "images/섹션1/유닛3_자연/산.svg" },
        ],
      },
      {
        title: "집과 물건",
        lessons: 9,
        words: [
          {
            word: "집",
            emoji: "🏠",
            image: "images/섹션1/유닛4_집과 물건/집.svg",
          },
          {
            word: "의자",
            emoji: "🪑",
            image: "images/섹션1/유닛4_집과 물건/의자.svg",
          },
          {
            word: "침대",
            emoji: "🛏️",
            image: "images/섹션1/유닛4_집과 물건/침대.svg",
          },
          {
            word: "우산",
            emoji: "☂️",
            image: "images/섹션1/유닛4_집과 물건/우산.svg",
          },
          {
            word: "시계",
            emoji: "⏰",
            image: "images/섹션1/유닛4_집과 물건/시계.svg",
          },
          {
            word: "열쇠",
            emoji: "🔑",
            image: "images/섹션1/유닛4_집과 물건/열쇠.svg",
          },
          {
            word: "가위",
            emoji: "✂️",
            image: "images/섹션1/유닛4_집과 물건/가위.svg",
          },
          {
            word: "전화",
            emoji: "☎️",
            image: "images/섹션1/유닛4_집과 물건/전화.svg",
          },
        ],
      },
      {
        title: "음식",
        lessons: 10,
        words: [
          { word: "빵", emoji: "🍞", image: "images/섹션1/유닛5_음식/빵.svg" },
          { word: "밥", emoji: "🍚", image: "images/섹션1/유닛5_음식/밥.svg" },
          {
            word: "라면",
            emoji: "🍜",
            image: "images/섹션1/유닛5_음식/라면.svg",
          },
          {
            word: "피자",
            emoji: "🍕",
            image: "images/섹션1/유닛5_음식/피자.svg",
          },
          {
            word: "김밥",
            emoji: "🍙",
            image: "images/섹션1/유닛5_음식/김밥.svg",
          },
          {
            word: "케이크",
            emoji: "🍰",
            image: "images/섹션1/유닛5_음식/케이크.svg",
          },
          {
            word: "아이스크림",
            emoji: "🍦",
            image: "images/섹션1/유닛5_음식/아이스크림.svg",
          },
          {
            word: "계란",
            emoji: "🥚",
            image: "images/섹션1/유닛5_음식/계란.svg",
          },
        ],
      },
      {
        title: "몸",
        lessons: 9,
        words: [
          { word: "눈", emoji: "👁️", image: "images/섹션1/유닛6_몸/눈.svg" },
          { word: "손", emoji: "✋", image: "images/섹션1/유닛6_몸/손.svg" },
          { word: "발", emoji: "🦶", image: "images/섹션1/유닛6_몸/발.svg" },
          { word: "코", emoji: "👃", image: "images/섹션1/유닛6_몸/코.svg" },
          { word: "귀", emoji: "👂", image: "images/섹션1/유닛6_몸/귀.svg" },
          { word: "입", emoji: "👄", image: "images/섹션1/유닛6_몸/입.svg" },
          {
            word: "머리",
            emoji: "🧠",
            image: "images/섹션1/유닛6_몸/머리.svg",
          },
          {
            word: "심장",
            emoji: "❤️",
            image: "images/섹션1/유닛6_몸/심장.svg",
          },
        ],
      },
      {
        title: "옷",
        lessons: 11,
        words: [
          {
            word: "모자",
            emoji: "🧢",
            image: "images/섹션1/유닛7_옷/모자.svg",
          },
          {
            word: "신발",
            emoji: "👟",
            image: "images/섹션1/유닛7_옷/신발.svg",
          },
          {
            word: "양말",
            emoji: "🧦",
            image: "images/섹션1/유닛7_옷/양말.svg",
          },
          {
            word: "가방",
            emoji: "🎒",
            image: "images/섹션1/유닛7_옷/가방.svg",
          },
          {
            word: "장갑",
            emoji: "🧤",
            image: "images/섹션1/유닛7_옷/장갑.svg",
          },
          {
            word: "목도리",
            emoji: "🧣",
            image: "images/섹션1/유닛7_옷/목도리.svg",
          },
          {
            word: "치마",
            emoji: "👗",
            image: "images/섹션1/유닛7_옷/치마.svg",
          },
          {
            word: "안경",
            emoji: "👓",
            image: "images/섹션1/유닛7_옷/안경.svg",
          },
        ],
      },
      {
        title: "탈것",
        lessons: 10,
        words: [
          {
            word: "자동차",
            emoji: "🚗",
            image: "images/섹션1/유닛8_탈것/자동차.svg",
          },
          {
            word: "버스",
            emoji: "🚌",
            image: "images/섹션1/유닛8_탈것/버스.svg",
          },
          {
            word: "기차",
            emoji: "🚆",
            image: "images/섹션1/유닛8_탈것/기차.svg",
          },
          {
            word: "자전거",
            emoji: "🚲",
            image: "images/섹션1/유닛8_탈것/자전거.svg",
          },
          { word: "배", emoji: "⛵", image: "images/섹션1/유닛8_탈것/배.svg" },
          {
            word: "비행기",
            emoji: "✈️",
            image: "images/섹션1/유닛8_탈것/비행기.svg",
          },
          {
            word: "택시",
            emoji: "🚕",
            image: "images/섹션1/유닛8_탈것/택시.svg",
          },
          {
            word: "오토바이",
            emoji: "🏍️",
            image: "images/섹션1/유닛8_탈것/오토바이.svg",
          },
        ],
      },
    ],
  },
  {
    title: "섹션 2 · 중급",
    color: "#1cb0f6",
    shadow: "#1899d6",
    units: [
      {
        title: "직업",
        lessons: 10,
        words: [
          {
            word: "소방관",
            emoji: "🧑‍🚒",
            image: "images/섹션2/유닛1_직업/소방관.svg",
          },
          {
            word: "의사",
            emoji: "🧑‍⚕️",
            image: "images/섹션2/유닛1_직업/의사.svg",
          },
          {
            word: "경찰관",
            emoji: "👮",
            image: "images/섹션2/유닛1_직업/경찰관.svg",
          },
          {
            word: "요리사",
            emoji: "👨‍🍳",
            image: "images/섹션2/유닛1_직업/요리사.svg",
          },
          {
            word: "농부",
            emoji: "🧑‍🌾",
            image: "images/섹션2/유닛1_직업/농부.svg",
          },
          {
            word: "화가",
            emoji: "🧑‍🎨",
            image: "images/섹션2/유닛1_직업/화가.svg",
          },
          {
            word: "과학자",
            emoji: "🧑‍🔬",
            image: "images/섹션2/유닛1_직업/과학자.svg",
          },
          {
            word: "선생님",
            emoji: "🧑‍🏫",
            image: "images/섹션2/유닛1_직업/선생님.svg",
          },
        ],
      },
      {
        title: "장소",
        lessons: 9,
        words: [
          {
            word: "병원",
            emoji: "🏥",
            image: "images/섹션2/유닛2_장소/병원.svg",
          },
          {
            word: "은행",
            emoji: "🏦",
            image: "images/섹션2/유닛2_장소/은행.svg",
          },
          {
            word: "시장",
            emoji: "🏪",
            image: "images/섹션2/유닛2_장소/시장.svg",
          },
          {
            word: "공원",
            emoji: "🏞️",
            image: "images/섹션2/유닛2_장소/공원.svg",
          },
          {
            word: "영화관",
            emoji: "🎬",
            image: "images/섹션2/유닛2_장소/영화관.svg",
          },
          {
            word: "지하철역",
            emoji: "🚇",
            image: "images/섹션2/유닛2_장소/지하철역.svg",
          },
          {
            word: "공항",
            emoji: "🛫",
            image: "images/섹션2/유닛2_장소/공항.svg",
          },
          {
            word: "놀이공원",
            emoji: "🎡",
            image: "images/섹션2/유닛2_장소/놀이공원.svg",
          },
        ],
      },
      {
        title: "스포츠",
        lessons: 11,
        words: [
          {
            word: "축구",
            emoji: "⚽",
            image: "images/섹션2/유닛3_스포츠/축구.svg",
          },
          {
            word: "농구",
            emoji: "🏀",
            image: "images/섹션2/유닛3_스포츠/농구.svg",
          },
          {
            word: "야구",
            emoji: "⚾",
            image: "images/섹션2/유닛3_스포츠/야구.svg",
          },
          {
            word: "배구",
            emoji: "🏐",
            image: "images/섹션2/유닛3_스포츠/배구.svg",
          },
          {
            word: "탁구",
            emoji: "🏓",
            image: "images/섹션2/유닛3_스포츠/탁구.svg",
          },
          {
            word: "볼링",
            emoji: "🎳",
            image: "images/섹션2/유닛3_스포츠/볼링.svg",
          },
          {
            word: "수영",
            emoji: "🏊",
            image: "images/섹션2/유닛3_스포츠/수영.svg",
          },
          {
            word: "스키",
            emoji: "⛷️",
            image: "images/섹션2/유닛3_스포츠/스키.svg",
          },
        ],
      },
      {
        title: "음악",
        lessons: 9,
        words: [
          {
            word: "피아노",
            emoji: "🎹",
            image: "images/섹션2/유닛4_음악/피아노.svg",
          },
          {
            word: "기타",
            emoji: "🎸",
            image: "images/섹션2/유닛4_음악/기타.svg",
          },
          {
            word: "바이올린",
            emoji: "🎻",
            image: "images/섹션2/유닛4_음악/바이올린.svg",
          },
          {
            word: "드럼",
            emoji: "🥁",
            image: "images/섹션2/유닛4_음악/드럼.svg",
          },
          {
            word: "트럼펫",
            emoji: "🎺",
            image: "images/섹션2/유닛4_음악/트럼펫.svg",
          },
          {
            word: "마이크",
            emoji: "🎤",
            image: "images/섹션2/유닛4_음악/마이크.svg",
          },
          {
            word: "헤드폰",
            emoji: "🎧",
            image: "images/섹션2/유닛4_음악/헤드폰.svg",
          },
          {
            word: "악보",
            emoji: "🎼",
            image: "images/섹션2/유닛4_음악/악보.svg",
          },
        ],
      },
      {
        title: "날씨",
        lessons: 10,
        words: [
          {
            word: "번개",
            emoji: "⚡",
            image: "images/섹션2/유닛5_날씨/번개.svg",
          },
          {
            word: "눈사람",
            emoji: "⛄",
            image: "images/섹션2/유닛5_날씨/눈사람.svg",
          },
          {
            word: "태풍",
            emoji: "🌀",
            image: "images/섹션2/유닛5_날씨/태풍.svg",
          },
          {
            word: "안개",
            emoji: "🌫️",
            image: "images/섹션2/유닛5_날씨/안개.svg",
          },
          {
            word: "무더위",
            emoji: "🥵",
            image: "images/섹션2/유닛5_날씨/무더위.svg",
          },
          {
            word: "소나기",
            emoji: "🌦️",
            image: "images/섹션2/유닛5_날씨/소나기.svg",
          },
          {
            word: "폭풍우",
            emoji: "⛈️",
            image: "images/섹션2/유닛5_날씨/폭풍우.svg",
          },
          {
            word: "서리",
            emoji: "❄️",
            image: "images/섹션2/유닛5_날씨/서리.svg",
          },
        ],
      },
      {
        title: "부엌",
        lessons: 9,
        words: [
          {
            word: "냄비",
            emoji: "🍲",
            image: "images/섹션2/유닛6_부엌/냄비.svg",
          },
          {
            word: "프라이팬",
            emoji: "🍳",
            image: "images/섹션2/유닛6_부엌/프라이팬.svg",
          },
          {
            word: "도마",
            emoji: "🔪",
            image: "images/섹션2/유닛6_부엌/도마.svg",
          },
          {
            word: "국자",
            emoji: "🥄",
            image: "images/섹션2/유닛6_부엌/국자.svg",
          },
          {
            word: "냉장고",
            emoji: "🧊",
            image: "images/섹션2/유닛6_부엌/냉장고.svg",
          },
          {
            word: "오븐",
            emoji: "🔥",
            image: "images/섹션2/유닛6_부엌/오븐.svg",
          },
          {
            word: "그릇",
            emoji: "🥣",
            image: "images/섹션2/유닛6_부엌/그릇.svg",
          },
          {
            word: "젓가락",
            emoji: "🥢",
            image: "images/섹션2/유닛6_부엌/젓가락.svg",
          },
        ],
      },
      {
        title: "바다 생물",
        lessons: 11,
        words: [
          {
            word: "문어",
            emoji: "🐙",
            image: "images/섹션2/유닛7_바다 생물/문어.svg",
          },
          {
            word: "상어",
            emoji: "🦈",
            image: "images/섹션2/유닛7_바다 생물/상어.svg",
          },
          {
            word: "고래",
            emoji: "🐳",
            image: "images/섹션2/유닛7_바다 생물/고래.svg",
          },
          {
            word: "게",
            emoji: "🦀",
            image: "images/섹션2/유닛7_바다 생물/게.svg",
          },
          {
            word: "새우",
            emoji: "🦐",
            image: "images/섹션2/유닛7_바다 생물/새우.svg",
          },
          {
            word: "거북이",
            emoji: "🐢",
            image: "images/섹션2/유닛7_바다 생물/거북이.svg",
          },
          {
            word: "해파리",
            emoji: "🪼",
            image: "images/섹션2/유닛7_바다 생물/해파리.svg",
          },
          {
            word: "물개",
            emoji: "🦭",
            image: "images/섹션2/유닛7_바다 생물/물개.svg",
          },
        ],
      },
      {
        title: "곤충과 새",
        lessons: 10,
        words: [
          {
            word: "나비",
            emoji: "🦋",
            image: "images/섹션2/유닛8_곤충과 새/나비.svg",
          },
          {
            word: "벌",
            emoji: "🐝",
            image: "images/섹션2/유닛8_곤충과 새/벌.svg",
          },
          {
            word: "개미",
            emoji: "🐜",
            image: "images/섹션2/유닛8_곤충과 새/개미.svg",
          },
          {
            word: "무당벌레",
            emoji: "🐞",
            image: "images/섹션2/유닛8_곤충과 새/무당벌레.svg",
          },
          {
            word: "독수리",
            emoji: "🦅",
            image: "images/섹션2/유닛8_곤충과 새/독수리.svg",
          },
          {
            word: "부엉이",
            emoji: "🦉",
            image: "images/섹션2/유닛8_곤충과 새/부엉이.svg",
          },
          {
            word: "참새",
            emoji: "🐦",
            image: "images/섹션2/유닛8_곤충과 새/참새.svg",
          },
          {
            word: "딱정벌레",
            emoji: "🪲",
            image: "images/섹션2/유닛8_곤충과 새/딱정벌레.svg",
          },
        ],
      },
    ],
  },
  {
    title: "섹션 3 · 고급",
    color: "#ce82ff",
    shadow: "#a568cc",
    units: [
      {
        title: "과학 도구",
        lessons: 10,
        words: [
          {
            word: "현미경",
            emoji: "🔬",
            image: "images/섹션3/유닛1_과학 도구/현미경.svg",
          },
          {
            word: "망원경",
            emoji: "🔭",
            image: "images/섹션3/유닛1_과학 도구/망원경.svg",
          },
          {
            word: "시험관",
            emoji: "🧪",
            image: "images/섹션3/유닛1_과학 도구/시험관.svg",
          },
          {
            word: "자석",
            emoji: "🧲",
            image: "images/섹션3/유닛1_과학 도구/자석.svg",
          },
          {
            word: "온도계",
            emoji: "🌡️",
            image: "images/섹션3/유닛1_과학 도구/온도계.svg",
          },
          {
            word: "배터리",
            emoji: "🔋",
            image: "images/섹션3/유닛1_과학 도구/배터리.svg",
          },
          {
            word: "전구",
            emoji: "💡",
            image: "images/섹션3/유닛1_과학 도구/전구.svg",
          },
          {
            word: "톱니바퀴",
            emoji: "⚙️",
            image: "images/섹션3/유닛1_과학 도구/톱니바퀴.svg",
          },
        ],
      },
      {
        title: "세계 음식",
        lessons: 9,
        words: [
          {
            word: "스시",
            emoji: "🍣",
            image: "images/섹션3/유닛2_세계 음식/스시.svg",
          },
          {
            word: "타코",
            emoji: "🌮",
            image: "images/섹션3/유닛2_세계 음식/타코.svg",
          },
          {
            word: "카레",
            emoji: "🍛",
            image: "images/섹션3/유닛2_세계 음식/카레.svg",
          },
          {
            word: "스파게티",
            emoji: "🍝",
            image: "images/섹션3/유닛2_세계 음식/스파게티.svg",
          },
          {
            word: "크루아상",
            emoji: "🥐",
            image: "images/섹션3/유닛2_세계 음식/크루아상.svg",
          },
          {
            word: "딤섬",
            emoji: "🥟",
            image: "images/섹션3/유닛2_세계 음식/딤섬.svg",
          },
          {
            word: "푸딩",
            emoji: "🍮",
            image: "images/섹션3/유닛2_세계 음식/푸딩.svg",
          },
          {
            word: "와플",
            emoji: "🧇",
            image: "images/섹션3/유닛2_세계 음식/와플.svg",
          },
        ],
      },
      {
        title: "도시와 건물",
        lessons: 11,
        words: [
          {
            word: "마천루",
            emoji: "🏙️",
            image: "images/섹션3/유닛3_도시와 건물/마천루.svg",
          },
          {
            word: "다리",
            emoji: "🌉",
            image: "images/섹션3/유닛3_도시와 건물/다리.svg",
          },
          {
            word: "성",
            emoji: "🏰",
            image: "images/섹션3/유닛3_도시와 건물/성.svg",
          },
          {
            word: "신전",
            emoji: "🛕",
            image: "images/섹션3/유닛3_도시와 건물/신전.svg",
          },
          {
            word: "공장",
            emoji: "🏭",
            image: "images/섹션3/유닛3_도시와 건물/공장.svg",
          },
          {
            word: "우체국",
            emoji: "🏤",
            image: "images/섹션3/유닛3_도시와 건물/우체국.svg",
          },
          {
            word: "시청",
            emoji: "🏛️",
            image: "images/섹션3/유닛3_도시와 건물/시청.svg",
          },
          {
            word: "동상",
            emoji: "🗽",
            image: "images/섹션3/유닛3_도시와 건물/동상.svg",
          },
        ],
      },
      {
        title: "우주",
        lessons: 9,
        words: [
          {
            word: "로켓",
            emoji: "🚀",
            image: "images/섹션3/유닛4_우주/로켓.svg",
          },
          {
            word: "행성",
            emoji: "🪐",
            image: "images/섹션3/유닛4_우주/행성.svg",
          },
          {
            word: "우주비행사",
            emoji: "🧑‍🚀",
            image: "images/섹션3/유닛4_우주/우주비행사.svg",
          },
          {
            word: "인공위성",
            emoji: "🛰️",
            image: "images/섹션3/유닛4_우주/인공위성.svg",
          },
          {
            word: "블랙홀",
            emoji: "🕳️",
            image: "images/섹션3/유닛4_우주/블랙홀.svg",
          },
          {
            word: "혜성",
            emoji: "☄️",
            image: "images/섹션3/유닛4_우주/혜성.svg",
          },
          {
            word: "은하수",
            emoji: "🌌",
            image: "images/섹션3/유닛4_우주/은하수.svg",
          },
          {
            word: "외계인",
            emoji: "👽",
            image: "images/섹션3/유닛4_우주/외계인.svg",
          },
        ],
      },
      {
        title: "신화와 판타지",
        lessons: 10,
        words: [
          {
            word: "용",
            emoji: "🐉",
            image: "images/섹션3/유닛5_신화와 판타지/용.svg",
          },
          {
            word: "마법사",
            emoji: "🧙",
            image: "images/섹션3/유닛5_신화와 판타지/마법사.svg",
          },
          {
            word: "유니콘",
            emoji: "🦄",
            image: "images/섹션3/유닛5_신화와 판타지/유니콘.svg",
          },
          {
            word: "요정",
            emoji: "🧚",
            image: "images/섹션3/유닛5_신화와 판타지/요정.svg",
          },
          {
            word: "인어",
            emoji: "🧜",
            image: "images/섹션3/유닛5_신화와 판타지/인어.svg",
          },
          {
            word: "좀비",
            emoji: "🧟",
            image: "images/섹션3/유닛5_신화와 판타지/좀비.svg",
          },
          {
            word: "뱀파이어",
            emoji: "🧛",
            image: "images/섹션3/유닛5_신화와 판타지/뱀파이어.svg",
          },
          {
            word: "유령",
            emoji: "👻",
            image: "images/섹션3/유닛5_신화와 판타지/유령.svg",
          },
        ],
      },
      {
        title: "의료",
        lessons: 11,
        words: [
          {
            word: "청진기",
            emoji: "🩺",
            image: "images/섹션3/유닛6_의료/청진기.svg",
          },
          {
            word: "주사기",
            emoji: "💉",
            image: "images/섹션3/유닛6_의료/주사기.svg",
          },
          {
            word: "알약",
            emoji: "💊",
            image: "images/섹션3/유닛6_의료/알약.svg",
          },
          {
            word: "반창고",
            emoji: "🩹",
            image: "images/섹션3/유닛6_의료/반창고.svg",
          },
          {
            word: "휠체어",
            emoji: "🦽",
            image: "images/섹션3/유닛6_의료/휠체어.svg",
          },
          {
            word: "목발",
            emoji: "🩼",
            image: "images/섹션3/유닛6_의료/목발.svg",
          },
          {
            word: "구급차",
            emoji: "🚑",
            image: "images/섹션3/유닛6_의료/구급차.svg",
          },
          {
            word: "안전모",
            emoji: "⛑️",
            image: "images/섹션3/유닛6_의료/안전모.svg",
          },
        ],
      },
      {
        title: "축제",
        lessons: 9,
        words: [
          {
            word: "폭죽",
            emoji: "🎆",
            image: "images/섹션3/유닛7_축제/폭죽.svg",
          },
          {
            word: "랜턴",
            emoji: "🏮",
            image: "images/섹션3/유닛7_축제/랜턴.svg",
          },
          {
            word: "가면",
            emoji: "🎭",
            image: "images/섹션3/유닛7_축제/가면.svg",
          },
          {
            word: "리본",
            emoji: "🎀",
            image: "images/섹션3/유닛7_축제/리본.svg",
          },
          {
            word: "풍선",
            emoji: "🎈",
            image: "images/섹션3/유닛7_축제/풍선.svg",
          },
          {
            word: "색종이",
            emoji: "🎊",
            image: "images/섹션3/유닛7_축제/색종이.svg",
          },
          {
            word: "촛불",
            emoji: "🕯️",
            image: "images/섹션3/유닛7_축제/촛불.svg",
          },
          {
            word: "트로피",
            emoji: "🏆",
            image: "images/섹션3/유닛7_축제/트로피.svg",
          },
        ],
      },
      {
        title: "지형과 재해",
        lessons: 10,
        words: [
          {
            word: "화산",
            emoji: "🌋",
            image: "images/섹션3/유닛8_지형과 재해/화산.svg",
          },
          {
            word: "사막",
            emoji: "🏜️",
            image: "images/섹션3/유닛8_지형과 재해/사막.svg",
          },
          {
            word: "빙하",
            emoji: "🧊",
            image: "images/섹션3/유닛8_지형과 재해/빙하.svg",
          },
          {
            word: "해일",
            emoji: "🌊",
            image: "images/섹션3/유닛8_지형과 재해/해일.svg",
          },
          {
            word: "정글",
            emoji: "🌴",
            image: "images/섹션3/유닛8_지형과 재해/정글.svg",
          },
          {
            word: "회오리바람",
            emoji: "🌪️",
            image: "images/섹션3/유닛8_지형과 재해/회오리바람.svg",
          },
          {
            word: "늪지대",
            emoji: "🐊",
            image: "images/섹션3/유닛8_지형과 재해/늪지대.svg",
          },
          {
            word: "협곡",
            emoji: "🏞️",
            image: "images/섹션3/유닛8_지형과 재해/협곡.svg",
          },
        ],
      },
    ],
  },
];

// ---- 발음 연습 (자음별 음성 인식 연습) ----
// 지금은 ㄹ만 있음. 다른 자음도 나중에 이 형식으로 이어서 추가하면 됨.
const PRONUNCIATION_SETS = [
  {
    consonant: "ㄹ",
    title: "ㄹ 발음 연습",
    syllables: ["라", "리", "루", "레", "로"],
  },
];

// ---- 상자 등급 / 강화 확률 / 보상 ----
const CHEST = {
  grades: ["일반", "레어", "에픽", "전설"],
  gradeEmoji: ["📦", "🎁", "💎", "👑"],
  gradeColor: ["#a0a0a0", "#1cb0f6", "#ce82ff", "#ffc800"],
  // upgradeChance[i] = i등급 → i+1등급 성공 확률
  upgradeChance: [0.8, 0.5, 0.25],
  rewards: [10, 30, 80, 200], // 등급별 보석 보상
};
