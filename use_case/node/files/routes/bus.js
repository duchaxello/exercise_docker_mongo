var router = require("express").Router();

router.get("/bus.json", (req, res) => {

    // connexion
    var mongoClient = require('mongodb').MongoClient;

    // selection d une db
    mongoClient.connect("mongodb://10.48.0.2:27017/test", function(err, db) {
        if (err) { 
	    console.log("Failed to get the buses info.");
            console.log(err); 
            return -1; 
        }
        var dbo = db.db("test");
        dbo.collection("bus").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
	    db.close();
        });
    });
});


module.exports = router;
