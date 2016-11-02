const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CMask = new Schema({
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
});

const CMans = new Schema({
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
});

const CMall = new Schema({
    ask: {
        type: Schema.Types.ObjectId,
        ref: 'CMask'
    },
    ans: {
        type: Schema.Types.ObjectId,
        ref: 'CMans'
    }
});

const CMpage = new Schema({
    datas:[Schema.Types.Mixed],
    page: {
        type: Number,
        min: 1
    },
    pageSize: {
        type: Number,
        min: 1
    },
    total: {
        type: Number,
        min: 0
    },
    totalPage: {
        type: Number,
        min: 0
    }
});

mongoose.model('CMask', CMask);
mongoose.model('CMans', CMans);
mongoose.model('CMall', CMall);
mongoose.model('CMpage', CMpage);
