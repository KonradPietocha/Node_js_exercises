const fs = require('fs');

fs.rename("textFile.txt", "newName.txt", (err) => {
    if (err) throw err;
    console.log("renamed");
});