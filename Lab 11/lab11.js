const express = require('express');
const app = express();

const rutas = require('./routes/alimento.js');
const post = require('./routes/post.js');

app.use('/alimento', rutas);
app.use('/post', post);

app.use('/', (request, response, next) => {
    let html = '<h1>alimento para perro</h1>';
    html += '<p>tenemos marcas de la mejor calidad!</p>';
    html += '<p>/alimento</p>';
    html += '<ul><li>/nupec</li><li>/royal-canin</li><li>/proplan</li></ul>'
    response.send(html);
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(5000);