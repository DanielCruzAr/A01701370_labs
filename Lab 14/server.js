const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const ruta_nupec = require('./routes/nupec.js');
const ruta_rc = require('./routes/royal-canin.js');
const ruta_proplan = require('./routes/proplan.js');

app.set('view engine', 'ejs');
app.set('views', 'views');

const datos = [{Titulo: 'adulto', Precio: 1300}, 
               {Titulo: 'cachorro', Precio: 1500},
               {Titulo: 'senior', Precio: 1100},
               {Titulo: 'rc-adulto', Precio: 1450},
               {Titulo: 'rc-cachorro', Precio: 1600},
               {Titulo: 'rc-senior', Precio: 1260}];

router.get('/', (request, response, next) => {
    response.render('store.ejs', {datos:datos});
});

router.get('/nupec', ruta_nupec);

router.get('/royal-canin', ruta_rc);

router.get('/proplan', ruta_proplan);

router.post('/post', (request, response, next) => {
    let suma = 0;
    
    for(let i = 0; i < datos.length ; i++){
        if(parseInt(request.body[datos[i].Titulo]) != 0){
            suma += parseInt(request.body[datos[i].Titulo]*datos[i].Precio);
        }
    }
    
    console.log(suma);
});

router.get( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = router;
app.listen(5000);
