const router = require('express').Router();
const CMctr = require('../controllers/cm.server.controller.js');

router.get('/getQues', CMctr.getQues);
router.get('/getOne', CMctr.getOne);
router.post('/postQues', CMctr.postQues);
router.post('/postAns', CMctr.postAns);
router.post('/delQues', CMctr.delQues);
router.get('/testRemove', CMctr.testRemove);
router.get('/testAdd', CMctr.testAdd);
router.get('/testAddOne', CMctr.testAddOne);
router.post('/addUser',CMctr.addUser);
router.get('/getUsers',CMctr.getUsers);

module.exports = router;
