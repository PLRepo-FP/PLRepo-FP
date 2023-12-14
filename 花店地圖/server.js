const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

// 將金鑰存儲在環境變數中
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

// 設定靜態檔案路徑（可選）
app.use(express.static('public'));

// 提供金鑰的端點
app.get('/api/google-maps-key', (req, res) => {
  res.json({ apiKey });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
