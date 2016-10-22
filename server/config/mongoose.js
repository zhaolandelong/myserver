const mongoose = require('mongoose');
const config = require('./config.js');
module.exports = function(){
  var db = mongoose.connect(config.mongodb);
  require('../models/cm.server.get.js');
  return db;
};
