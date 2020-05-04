const mysql = require("mysql");
const pass = require("./pass.js");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: pass.word,
    database: "mydb"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table created");
    });
});