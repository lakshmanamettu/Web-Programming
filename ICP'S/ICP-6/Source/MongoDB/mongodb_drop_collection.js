/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://lakshmana:sweetmom143@ds243295.mlab.com:43295/lakshman";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropCollection("newCollection", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});