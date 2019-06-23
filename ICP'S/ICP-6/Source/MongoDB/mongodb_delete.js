/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://lakshmana:sweetmom143@ds243295.mlab.com:43295/lakshman";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: 'Main Road 989' };
    db.collection("newCollection").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});