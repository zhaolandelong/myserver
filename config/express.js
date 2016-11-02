const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
module.exports = function() {
    console.log('init express...');
    const app = express();

    app.use(bodyParser.json());
    console.log(__dirname);
    app.use(express.static(path.resolve(__dirname, '../public')));
    require('../app/routes/cm.server.routes.js')(app);

    app.use(function(req, res, next) {
        res.status(404);
        try {
            return res.json('Not Found');
        } catch (e) {
            console.error('404 set header after sent');
        }
    });

    app.use(function(err, req, res, next) {
        if (!err) {
            return next();
        }
        res.status(500);
        try {
            return res.json(err.message || 'server error');
        } catch (e) {
            console.error('500 set header after sent');
        }
    });

    return app;
};
