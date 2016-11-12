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
    app.use(express.static('./public'));

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
