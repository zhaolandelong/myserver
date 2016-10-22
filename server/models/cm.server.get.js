var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  ask:{
    name: {
      type: String,
      required: true
    },
    txt: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  ans:{
    name: String,
    txt: String,
    time: Number
  }
});
mongoose.model('User',UserSchema);
