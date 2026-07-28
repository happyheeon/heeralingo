package com.heeralingo.app

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

/**
 * 앱은 얇은 WebView 껍데기고, 실제 학습 화면은 GitHub Pages에 올라간
 * 웹앱(https://happyheeon.github.io/heeralingo/)을 그대로 불러와서 보여줌.
 * 위젯에 필요한 스트릭/보석 값은 [WidgetBridge]를 통해 웹 쪽(common.js)에서
 * 직접 넘겨받는다.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView

    companion object {
        private const val APP_URL = "https://happyheeon.github.io/heeralingo/index.html"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true // localStorage 필수
        webView.webViewClient = WebViewClient()
        webView.addJavascriptInterface(WidgetBridge(this), "AndroidWidget")

        webView.loadUrl(APP_URL)
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
