const CMctr = require('../controllers/cm.server.controller.js');

module.exports = function(app) {
    app.route('/getAll').get(CMctr.getAll);
    app.route('/getAsk').get(CMctr.getAsk);
    app.route('/getAns').get(CMctr.getAns);
    app.route('/postAll').post(CMctr.postAll);
    app.route('/postAsk').post(CMctr.postAsk);
    app.route('/postAns').post(CMctr.postAns);
    app.route('/testRemove').get(CMctr.testRemove);
    app.route('/testAdd').get(CMctr.testAdd);
    app.route('/testAddOne').get(CMctr.testAddOne);
};
