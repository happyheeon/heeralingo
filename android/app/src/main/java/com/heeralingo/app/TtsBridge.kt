package com.heeralingo.app

import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import java.util.Locale

/**
 * 안드로이드 WebView는 브라우저의 Web Speech API(speechSynthesis)를 지원하지 않아서
 * common.js의 speak()가 아무 소리도 못 냄. 대신 안드로이드 자체 TTS 엔진을 이 다리로 연결해서
 * `window.AndroidTts.speak(text)`로 호출하면 실제 소리가 나게 함.
 * (common.js 쪽에서 AndroidTts가 있으면 이걸 먼저 쓰고, 없으면 원래 speechSynthesis로 폴백)
 */
class TtsBridge(private val tts: TextToSpeech) {

    @JavascriptInterface
    fun speak(text: String) {
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "heeralingo-tts")
    }
}
