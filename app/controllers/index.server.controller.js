'use strict';
module.exports = {
    index: (req, res) => {
        res.render('index.jade', {
            title: 'Hey',
            message: 'Hello there!'
        });
    }
};
