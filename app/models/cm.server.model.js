const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ques = new Schema({
    ask: {
        name: {
            type: String,
            required: true
        },
        txt: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            default: Date.now
        }
    },
    ans: {
        name: String,
        txt: String,
        time: {
            type: Date,
            default: Date.now
        }
    }
});

mongoose.model('Ques',Ques);
