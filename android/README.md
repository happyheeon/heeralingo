# 희라링고 안드로이드 앱 + 홈 화면 위젯

이 폴더는 안드로이드 스튜디오로 여는 프로젝트임. **여기서 빌드/실행은 안 해봤음** (이 작업 환경엔 Android SDK가 없음) — Android Studio에서 열어서 직접 빌드해야 함.

## 구조

- 앱 자체는 얇은 WebView 껍데기. 실제 화면은 GitHub Pages에 배포된 웹앱(`https://happyheeon.github.io/heeralingo/`)을 그대로 불러옴.
  → 즉 웹 쪽(`index.html`/`lesson.html`/`quest.html`/`common.js` 등)을 고치면 앱도 새로고침만 하면 바로 반영됨. 앱을 다시 빌드할 필요 없음.
- 홈 화면 2x2 위젯(`HeeralingoWidgetProvider`)은 스트릭(연속 학습 일수)과 보석 개수를 보여줌.
- 웹 쪽 `common.js`의 `saveState()`가 호출될 때마다 `window.AndroidWidget.updateStreak(streak, gems)`를 호출하도록 이미 연결해 둠 (브라우저에서는 `AndroidWidget`이 없어서 조용히 무시됨 — 웹앱 자체엔 영향 없음). `MainActivity`가 이 인터페이스를 WebView에 주입하고, 값이 들어오면 `SharedPreferences`에 저장한 뒤 위젯을 즉시 갱신함.

## 빌드하는 법

1. Android Studio (최신 버전 권장)로 이 `android/` 폴더를 프로젝트로 열기.
2. Gradle Wrapper 파일(`gradlew`, `gradlew.bat`, `gradle/wrapper/gradle-wrapper.jar`)은 포함 안 되어 있음 — Android Studio가 처음 열 때 알아서 만들어주거나, "Gradle Sync" 하면 스튜디오에 내장된 Gradle로 그냥 동작함. 문제 생기면 `File > Sync Project with Gradle Files` 한 번 눌러주기.
3. `Run`으로 실제 기기/에뮬레이터에 설치.
4. 위젯 추가는 기기 홈 화면에서 길게 눌러 "위젯" → "희라링고" 찾아서 2x2로 추가.

## 알아두면 좋은 것

- `applicationId`는 `com.heeralingo.app`으로 해놨음. 스토어에 올릴 거면 바꿔도 됨.
- `minSdk = 26`. 어댑티브 아이콘만 넣어놔서 그 아래 버전은 지원 안 함 (요즘 기기는 거의 다 26 이상이라 문제 없을 것).
- 앱 아이콘은 대충 불꽃 모양 벡터로 만들어 둔 거라 마음에 안 들면 Android Studio의 `New > Image Asset` 마법사로 다시 만들면 됨.
- 위젯은 앱을 한 번이라도 열어야 값이 채워짐 (그 전엔 "첫 레슨을 시작해보세요!" 같은 기본 문구만 보임). `updatePeriodMillis`도 30분으로 걸어놔서 앱을 안 열어도 주기적으로 갱신은 되지만, 실시간으로 보이려면 앱을 한 번 여는 게 확실함.
- 오프라인 지원(서비스워커/캐싱)은 안 넣었음 — 필요하면 얘기해줘.
