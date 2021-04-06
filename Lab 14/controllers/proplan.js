const express = require('express');
const path = require('path');
const datos = [{Titulo: 'adulto', Precio: 1300}, 
               {Titulo: 'cachorro', Precio: 1500},
               {Titulo: 'senior', Precio: 1100},
               {Titulo: 'rc-adulto', Precio: 1450},
               {Titulo: 'rc-cachorro', Precio: 1600},
               {Titulo: 'rc-senior', Precio: 1260}];

exports.get = (request, response, next) => {
    response.render('proplan.ejs', {datos:datos});
};