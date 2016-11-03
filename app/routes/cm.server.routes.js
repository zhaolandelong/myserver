const router = require('express').Router();
const CMctr = require('../controllers/cm.server.controller.js');

router.get('/getQues', CMctr.getQues);
router.post('/postQues', CMctr.postQues);
router.get('/testRemove', CMctr.testRemove);
router.get('/testAdd', CMctr.testAdd);
router.get('/testAddOne', CMctr.testAddOne);

module.exports = router;
