package com.heeralingo.app

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.widget.RemoteViews
import java.util.Calendar

/**
 * 2x2 홈 화면 위젯. 스트릭/보석은 WidgetBridge가 저장해 둔 SharedPreferences 값을 읽어서 표시.
 * 아직 한 번도 안 열었으면(값 없음) "학습을 시작해보세요" 같은 안내 문구를 보여줌.
 */
class HeeralingoWidgetProvider : AppWidgetProvider() {

    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        updateWidgets(context, appWidgetManager, appWidgetIds)
    }

    companion object {
        private val MESSAGES_ACTIVE = listOf(
            "오늘도 학습해볼까요?",
            "연속 학습을 이어가세요!",
            "잊지 말고 학습하세요!",
            "잠깐, 오늘 학습했나요?",
        )
        private val MESSAGES_NONE = listOf(
            "첫 레슨을 시작해보세요!",
            "희라링고와 함께 시작해요",
        )

        fun updateWidgets(context: Context, manager: AppWidgetManager, ids: IntArray) {
            val prefs = context.getSharedPreferences(WidgetBridge.WIDGET_PREFS, Context.MODE_PRIVATE)
            val streak = prefs.getInt(WidgetBridge.KEY_STREAK, 0)
            val gems = prefs.getInt(WidgetBridge.KEY_GEMS, 0)

            val dayOfYear = Calendar.getInstance().get(Calendar.DAY_OF_YEAR)
            val message = if (streak > 0) {
                MESSAGES_ACTIVE[dayOfYear % MESSAGES_ACTIVE.size]
            } else {
                MESSAGES_NONE[dayOfYear % MESSAGES_NONE.size]
            }

            val launchIntent = Intent(context, MainActivity::class.java)
            val pendingIntent = PendingIntent.getActivity(
                context,
                0,
                launchIntent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
            )

            for (id in ids) {
                val views = RemoteViews(context.packageName, R.layout.widget_streak)
                views.setTextViewText(R.id.widget_streak_count, streak.toString())
                views.setTextViewText(R.id.widget_message, message)
                views.setTextViewText(R.id.widget_gems, "💎 $gems") // 💎
                views.setOnClickPendingIntent(R.id.widget_root, pendingIntent)
                manager.updateAppWidget(id, views)
            }
        }
    }
}
