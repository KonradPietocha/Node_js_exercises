const fs = require('fs');

fs.unlink("newTextFile.txt", (err) => {
    if (err) throw err;
    console.log("file deleted");
});