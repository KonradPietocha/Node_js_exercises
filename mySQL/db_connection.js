const mysql = require("mysql");
const pass = require("./pass.js");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass.word
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
});