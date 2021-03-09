const express = require('express');
const router = express.Router();

router.get('/post', (request, response, next) => {
    let html = '<form action="http://localhost:5000/post" method="POST"><input type="submit" value="subir forma"></form>';
    response.send(html);
});

module.exports = router;