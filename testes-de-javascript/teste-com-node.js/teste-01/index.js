var http = require('http');
var dt = require('./date.js')
var url= require('url')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  // res.write(`A data e o tempo de agora:  ${dt.dateTime()}`);
  // res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt)
}).listen(8080);