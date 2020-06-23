const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myObj = [{_id: 145, name: "kake"}, {_id: 123, name: "melk"}];
    dbo.collection("products").insertMany(myObj, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});