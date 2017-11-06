/**
 * Created by lenovo on 2017/11/6.
 */
const express = require('express');
const path = require('src/path');
const app = express();

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('content-type', 'text/html');
  res.sendFile(path.resolve(__dirname, './1.js'));
});
app.listen(8989, function() {
  console.log('server start at: localhost:8989');
})