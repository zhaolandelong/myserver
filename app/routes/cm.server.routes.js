const router = require('express').Router();
const ctr = require('../controllers/cm.server.controller.js');

router.get('/', ctr.index);
router.get('/getQues', ctr.getQues);
router.get('/getOne', ctr.getOne);
router.post('/postQues', ctr.postQues);
router.post('/postAns', ctr.postAns);
router.post('/delQues', ctr.delQues);
router.get('/testRemove', ctr.testRemove);
router.get('/testAdd', ctr.testAdd);
router.get('/testAddOne', ctr.testAddOne);
router.post('/addUser',CMctr.addUser);
router.get('/getUsers',CMctr.getUsers);

module.exports = router;
