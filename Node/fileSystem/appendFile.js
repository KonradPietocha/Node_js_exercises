var fs = require("fs");

fs.appendFile("textFile.txt", "Some sample text", function (err) {
    if (err) throw err;
    console.log("Saved");
});