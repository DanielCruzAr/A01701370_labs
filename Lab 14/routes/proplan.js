const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const proplan = require('../controllers/proplan.js');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/', (proplan.get));

module.exports = router;