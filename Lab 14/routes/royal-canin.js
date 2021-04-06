const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const rc = require('../controllers/royal-canin.js');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/', (rc.get));

module.exports = router;