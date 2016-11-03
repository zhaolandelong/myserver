const CMctr = require('../controllers/cm.server.controller.js');

module.exports = function(app) {
    app.route('/getQues').get(CMctr.getQues);
    app.route('/postQues').post(CMctr.postQues);
    app.route('/testRemove').get(CMctr.testRemove);
    app.route('/testAdd').get(CMctr.testAdd);
    app.route('/testAddOne').get(CMctr.testAddOne);
};
