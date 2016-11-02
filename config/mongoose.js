const mongoose = require('mongoose');
const config = require('./config.js');
module.exports = function() {
    var db = mongoose.connect(config.mongodb);
    require('../app/models/cm.server.model.js');
    return db;
};
