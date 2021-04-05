const express = require('express');
const router = express.Router();
const store = require('../views');

function comprar(request, response, next) {
    let ad = document.getElementById("adulto").value*1300;
    let ch = document.getElementById("cachorro").value*1500;
    let sn = document.getElementById("senior").value*1100;
    let rcad = document.getElementById("rc-adulto").value*1450;
    let rcch = document.getElementById("rc-cachorro").value*1600;
    let rcsn = document.getElementById("rc-senior").value*1260;

    let suma = ad+ch+sn+rcad+rcch+rcsn;
};

module.exports.comprar = comprar;