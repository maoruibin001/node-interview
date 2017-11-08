/**
 * Created by lenovo on 2017/11/6.
 */
const http = require('http');

http.createServer(function(req, res) {
  console.log(req);
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('hello world');
}).listen(80, function() {
  console.log('90')
})