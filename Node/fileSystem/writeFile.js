const fs = require('fs');

fs.writeFile("newTextFile.txt", "abcdefghijklmnopqrstuvwxyz", (err) => {
    if (err) throw err;
    console.log("replaced");
});