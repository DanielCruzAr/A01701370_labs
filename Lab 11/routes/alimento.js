const express = require('express');
const router = express.Router();

router.get('/nupec', (request, response, next) => {
    let html = '<ul><li><strong>nupec adulto</strong>$1300</li>';
    html += '<li><strong>nupec cachorro</strong>$1500</li>';
    html += '<li><strong>nupec senior</strong>$1100</li>';
    response.send(html);
});

router.use('/royal-canin', (request, response, next) => {
    let html = '<ul><li><strong>rc adulto</strong>$1450</li>';
    html += '<li><strong>rc cachorro</strong>$1600</li>';
    html += '<li><strong>rc senior</strong>$1260</li>';
    response.send(html);
});

router.use('/proplan', (request, response, next) => {
    let html = '<ul><li><strong>proplan adulto</strong>$1350</li>';
    html += '<li><strong>proplan weight control</strong>$1560</li>';
    response.send(html);
});

module.exports = router;