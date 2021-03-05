const http = require('http');

const server = http.createServer( (request, response) => {

    if(request.url == '/hw1'){
        response.write('<html>');
        response.write("<head><meta charset='UTF-8'><title>Hola Mundo</title></head>");
        response.write("<body><h1>Hello world 1</h1></body>");
        response.write('</html>');
    }

    else if(request.url == '/post'){
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><title>Hola Mundo</title></head>');
        response.write('<body><form method="POST" action="post"><input type="submit" value="subir forma"></form></body>');
        response.write('</html>');
    }

    else if(request.url == '/hw2'){
        response.write('<html>');
        response.write("<head><meta charset='UTF-8'><title>Hola Mundo de nuevo</title></head>");
        response.write("<body><h1>Hello world 2</h1></body>");
        response.write('</html>');
    }

    else {
        response.statusCode = 404;
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Page not found</title></head>");
        response.write("<body><h1>Error 404: Page not found</h1></body>");
        response.write("</html>");   
    }
});