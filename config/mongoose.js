'use strict';
const mongoose = require('mongoose');
const config = require('./config.js');
module.exports = () => {
    const db = mongoose.connect(config.mongodb);
    require('../app/models/cm.server.model.js');
    require('../app/models/test.server.model.js');
    return db;
};
