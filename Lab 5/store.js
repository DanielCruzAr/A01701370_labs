function cobrar(){
    let ad = document.getElementById("adulto").value*1300;
    let ch = document.getElementById("cachorro").value*1500;
    let sn = document.getElementById("senior").value*1100;

    let suma = ad+ch+sn;
    let iva = suma*0.10;
    let total = suma+iva;

    document.write('<p>Productos = '+suma);
    document.write('<p>IVA = '+iva);
    document.write('<p>Total = '+total);
}

const press = document.getElementById("accept");
press.onclick = function(){cobrar()}