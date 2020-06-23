const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myObj = [{ _id: 145, name: "kake" }, { _id: 123, name: "melk" }];
    dbo.collection("products").insertMany(myObj, (err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, (err, res) => {
        if (err) throw err;
        console.log(res.name);
        db.close();
    });
});

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection("customers").find({}, {
        projection: { _id: 0, name: 1, address: 1 }
    }).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    let query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query)
        .toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});

//find documents where address starts with the letter "S":
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    const query = { address: /^S/ };
    dbo.collection("customers").find(query)
        .toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});
//sort the result:
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    let sortAsc = { name: 1 };
    dbo.collection("customers").find().sort(sortAsc)
        .toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});
//sort descending
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    let sortDesc = { name: -1 };
    dbo.collection("customers").find().sort(sortDesc)
        .toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});
//delete document
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    
});