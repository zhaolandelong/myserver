'use strict';
const template = require('art-template');
let data = {
    list: ["aui", "test"]
};
template.config('base', './views');
template.config('extname', '.html');
module.exports = template;
