const template = require('art-template');
// template.config('base','');
template.config('extname', '.html');
template.helper('api', (data) => JSON.stringify(data, null, 4));
template.helper('dollar', (data) => '$' + data);
module.exports = template;
