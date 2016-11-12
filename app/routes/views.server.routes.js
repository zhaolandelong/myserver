const router = require('express').Router();
const ctr = require('../controllers/views.server.controller.js');

router.get('/', ctr.index);

module.exports = router;
