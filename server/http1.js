/**
 * Created by lenovo on 2017/11/6.
 */
const express = require('express');
const path = require('path');
const app = express();

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'get,post,put,delete');
  res.header('content-type', 'text/html');
  res.send('hello world , i am http1');
});
app.post('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'get,post,put,delete');
  res.header('content-type', 'text/html');
  res.json({name: 'maoruibin'});
});
app.listen(80, function() {
  console.log('server start at: localhost:80');
})