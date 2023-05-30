var http = require("http");

http.createServer(function(hiroshi, response) {
  console.log(hiroshi)
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

// 上記コードは↓↓のように書き換えても同じ結果になる
/*
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
*/