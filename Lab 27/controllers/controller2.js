const path = require('path');

exports.get = (request, response, next) => {
    response.sendFile(path.join(__dirname, '../views', 'view2.html'));
};