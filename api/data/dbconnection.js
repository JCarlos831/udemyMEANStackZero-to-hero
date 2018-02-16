var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://'+process.env.IP+':27017/meanHotel';

var _connection = null;

var open = function() {
    MongoClient.connect(dburl, function(err, client) {
        if (err) {
            console.log ("DB connection failed");
            return;
        }
        _connection = client.db("meanHotel");
        console.log("DB connection open", client);
    });
    //set _connection
};

var get = function() {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};