const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const app = express();

// إعدادات البوت
const token = '7667803098:AAFo3-Ao0rHM_U-LpqgyZyj1nZa_OROY7io'
const chatId ='827010626'

const bot = new TelegramBot(token);

// راوت تجريبي للتأكد أن السيرفر يعمل
app.get("/", (req, res) => {
  res.send("Everything is working!");
});

// راوت لإرسال رسالة إلى تيليجرام
app.get("/send", async (req, res) => {
  try {
    await bot.sendMessage(chatId, "✅ الرسالة أُرسلت من السيرفر إلى تيليجرام.");
    res.send("✔️ تم إرسال الرسالة إلى تيليجرام.");
  } catch (err) {
    console.error(err);
    res.status(500).send("حدث خطأ أثناء الإرسال.");
  }
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
