const template = require('art-template');
// template.config('base','');
template.config('extname', '.html');
template.helper('json', (data) => {
    JSON.stringify(data, '', 4)
});
template.helper('dollar', (data) => '$' + data);
module.exports = template;
