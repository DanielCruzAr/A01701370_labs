const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('Hola mundo');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.use('/hm1', (request, response, next) => {
    response.send('<html>');
    response.send("<head><meta charset='UTF-8'><title>Hola Mundo</title></head>");
    response.send("<body><h1>Hello world 1</h1></body>");
    response.send('</html>');
});

app.use('/post', (request, response, next) => {
    response.send('<html>');
    response.send('<head><meta charset="UTF-8"><title>Hola Mundo</title></head>');
    response.send('<body><form action="post" method="POST"><input type="submit" value="subir forma"></form></body>');
    response.send('</html>');
});

app.use('/hm3', (request, response, next) => {
    response.send('<html>');
    response.send("<head><meta charset='UTF-8'><title>Hola Mundo de nuevo</title></head>");
    response.send("<body><h1>Página #3</h1></body>");
    response.send('</html>');
});

app.use('/hm4', (request, response, next) => {
    response.send('<html>');
    response.send("<head><meta charset='UTF-8'><title>Pag 4</title></head>");
    response.send("<body><h1>Página #4</h1></body>");
    response.send('</html>');
});

app.use('/hm5', (request, response, next) => {
    response.send('<html>');
    response.send("<head><meta charset='UTF-8'><title>Pag 5</title></head>");
    response.send("<body><h1>Página #5</h1></body>");
    response.send('</html>');
});


app.listen(3000);