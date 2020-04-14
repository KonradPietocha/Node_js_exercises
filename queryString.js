var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    var query = url.parse(req.url, true).query;
    var text = "Today:" + " " + query.day + " " + query.month + " " + query.year;
    res.end(text);
}).listen(8080);

var monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth());
var month = monthsArray[mm];
var yyyy = today.getFullYear();
var link = `http://localhost:8080/?day=${dd}&month=${month}&year=${yyyy}`;
console.log("open link:", link);