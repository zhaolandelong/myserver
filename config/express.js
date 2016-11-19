'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const template = require('./template.js');

module.exports = () => {
    const app = express();

    app.engine('.html', template.__express);
    // app.set('views','./views'); //views paths
    app.set('view engine', 'html'); // set engine

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.all('*', function(req, res, next) {
        res.header("Cache-Control", "max-age=315360000");
        res.header("Expires", "Tue, 17 Nov 2026 12:29:02 GMT");
        // res.header("Last-Modified", "max-age=315360000");

        // res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        // res.header("X-Powered-By", ' 3.2.1')
        // res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
    app.use(express.static('./public'));

    app.use('/test', require('../app/routes/test.server.routes.js'));
    app.use('/cmapis', require('../app/routes/cm.server.routes.js'));
    app.use('/', require('../app/routes/views.server.routes.js'));

    app.use((req, res, next) => {
        res.status(404);
        try {
            return res.json('Not Found');
        } catch (e) {
            console.error('404 set header after sent');
        }
    });
    app.use((err, req, res, next) => {
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
