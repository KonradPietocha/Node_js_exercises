const fs = require("fs");

let object = JSON.stringify({name: "Jan", surname: "Kowalski"});
fs.appendFile("textFile.txt", object, function (err) {
    if (err) throw err;
    console.log("saved");
});