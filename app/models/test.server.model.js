const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Test = new Schema({
    time: {
        type: Number,
        default: Date.now()
    },
    rand: {
        type: Number,
        default: Math.random()
    }
});

mongoose.model('Test',Test);
