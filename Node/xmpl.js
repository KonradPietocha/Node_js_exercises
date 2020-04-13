var http = require('http');

var dataObj = JSON.stringify({ name: "John Bravo", id: 21 });

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(dataObj);
}).listen(8080);