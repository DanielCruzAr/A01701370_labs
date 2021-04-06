const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const nupec = require('../controllers/nupec.js');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/', (nupec.get));

module.exports = router;