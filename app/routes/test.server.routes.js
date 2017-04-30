const router = require('express').Router();
const ctr = require('../controllers/test.server.controller.js');

router.get('/', ctr.index);
router.get('/addData', ctr.addData);
router.get('/getData', ctr.getData);
router.get('/removeAll', ctr.removeAll);
router.post('/postForm', ctr.postForm);

module.exports = router;
