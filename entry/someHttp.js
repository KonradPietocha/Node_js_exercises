var http = require("http");

http.createServer(function (req, res) {
    res.write("message");
    res.end();
}).listen(8080);