'use strict';
const data = require('../jsons/views.server.index.json');
module.exports = {
    index: (req, res) => {
        res.render('index', data);
    }
};
