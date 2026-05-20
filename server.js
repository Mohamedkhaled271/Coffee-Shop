const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// خدمة الملفات الثابتة (CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

// لأي رابط، ارجع ملف index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`✅ Coffee Shop Server is running on port ${port}`);
  console.log(`📱 Open: http://localhost:${port}`);
});
