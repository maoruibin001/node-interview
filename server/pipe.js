/**
 * Created by lenovo on 2017/11/6.
 */
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

let readStream;
let writeStream;
app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('content-type', 'text/plain');

  readStream = fs.createReadStream('../static/1.txt');
  writeStream = fs.createWriteStream('../static/2.txt', { flags: 'w+',
    encoding: null,
    mode: 0666 });
  req.pipe(writeStream);
  readStream.pipe(res);
});
app.listen(8989, function() {
  console.log('server start at: localhost:8989');
})