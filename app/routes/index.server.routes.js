const router = require('express').Router();
const ctr = require('../controllers/index.server.controller.js');

router.get('/',ctr.index);

module.exports = router;
