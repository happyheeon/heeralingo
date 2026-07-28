package com.heeralingo.app

import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import java.util.Locale

/**
 * 앱은 얇은 WebView 껍데기고, 실제 학습 화면은 GitHub Pages에 올라간
 * 웹앱(https://happyheeon.github.io/heeralingo/)을 그대로 불러와서 보여줌.
 * 위젯에 필요한 스트릭/보석 값은 [WidgetBridge]를 통해 웹 쪽(common.js)에서
 * 직접 넘겨받는다. TTS는 WebView가 speechSynthesis를 지원 안 해서 [TtsBridge]로
 * 안드로이드 네이티브 TTS 엔진을 대신 연결해 줌.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var tts: TextToSpeech? = null

    companion object {
        private const val APP_URL = "https://happyheeon.github.io/heeralingo/index.html"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (BuildConfig.DEBUG) {
            WebView.setWebContentsDebuggingEnabled(true)
        }

        webView = findViewById(R.id.webview)
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true // localStorage 필수
        webView.settings.mediaPlaybackRequiresUserGesture = false // 응원 영상 자동재생 + 소리 허용
        webView.webViewClient = WebViewClient()
        webView.addJavascriptInterface(WidgetBridge(this), "AndroidWidget")

        tts = TextToSpeech(this) { status ->
            if (status == TextToSpeech.SUCCESS) {
                tts?.language = Locale.KOREAN
            }
        }
        webView.addJavascriptInterface(TtsBridge(tts!!), "AndroidTts")

        webView.loadUrl(APP_URL)
    }

    override fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
