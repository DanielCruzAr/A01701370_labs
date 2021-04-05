const api = require('../Utils/funcion.js')
const path = require('path');

exports.get = (request, response, next) => {
    const data = api.airtableAPI();
    response.sendFile(path.join(__dirname, '../views', 'view1.html'));
};

