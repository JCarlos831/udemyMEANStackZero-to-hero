var MongoClient = require('mongodb').MongoClient;

var _connection = null;

var open = function() {
    //set _connection
};

var get = function() {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};