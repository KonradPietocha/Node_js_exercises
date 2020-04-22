const fs = require('fs');

fs.open("newTextFile.txt", "w", (err, file) => {
    if (err) throw err;
    console.log("saved");
});