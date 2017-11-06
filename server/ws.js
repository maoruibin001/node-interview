/**
 * Created by lenovo on 2017/11/6.
 */
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
  console.log('client connected');
  ws.on('message', function (message) {
    console.log(message);
    ws.send('hello, i have receive your message! thx')
  });
});