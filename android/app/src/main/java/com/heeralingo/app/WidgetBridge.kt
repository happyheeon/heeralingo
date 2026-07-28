package com.heeralingo.app

import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.content.Context
import android.webkit.JavascriptInterface

/**
 * common.js에서 `window.AndroidWidget.updateStreak(streak, gems)`로 호출하는 다리.
 * 브라우저에서는 window.AndroidWidget이 없으니 아무 일도 안 하고,
 * 이 WebView 안에서만 SharedPreferences에 값을 저장하고 위젯을 즉시 갱신시킴.
 */
class WidgetBridge(private val context: Context) {

    @JavascriptInterface
    fun updateStreak(streak: Int, gems: Int) {
        context
            .getSharedPreferences(WIDGET_PREFS, Context.MODE_PRIVATE)
            .edit()
            .putInt(KEY_STREAK, streak)
            .putInt(KEY_GEMS, gems)
            .apply()

        val manager = AppWidgetManager.getInstance(context)
        val ids = manager.getAppWidgetIds(ComponentName(context, HeeralingoWidgetProvider::class.java))
        if (ids.isNotEmpty()) {
            HeeralingoWidgetProvider.updateWidgets(context, manager, ids)
        }
    }

    companion object {
        const val WIDGET_PREFS = "widget_prefs"
        const val KEY_STREAK = "streak"
        const val KEY_GEMS = "gems"
    }
}
