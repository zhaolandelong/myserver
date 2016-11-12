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
            type: Number,
            default: Date.now()
        }
    },
    ans: {
        name: String,
        txt: String,
        time: Number
    }
});
const User = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    degree: {
        type: Number,
        required: true
    },
    school: {
        type: String,
        required: true
    }
});

mongoose.model('Ques', Ques);
mongoose.model('User', User);
