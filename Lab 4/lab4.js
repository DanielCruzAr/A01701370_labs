//Ejercicio1
function uno(){
	const n = window.prompt('número: ');

	for(let i = 1; i <= n; i++){
		document.write('<br><tr><td> ' + i + '</td><td> ' 
        + i*i + '</td><td> ' + i*i*i + '</td></tr>');
	}
}

// Ejercicio2
function dos(){
	let time = Date.now();
	const x = Math.floor(Math.random() * 100);
	const y = Math.floor(Math.random() * 100);

    const res = window.prompt('Ingrese resultado: ' + x + " + " + y);
	let end = Date.now();

    if(res == (x+y)){
        document.write('<p><strong>Correcto!</strong> Tardaste '+ ((end-time)/1000) + ' segundos</p>')
    } else{
        document.write('<p><strong>Incorrecto!</strong> Tardaste '+ ((end-time)/1000) + ' segundos</p>')
	}
}

// Ejercicio3
function contador(numArr){
	let negativos = 0;
	let ceros = 0;
	let positivos = 0;
	numArr.forEach( num => {
		if (num < 0){negativos += 1}
		else if (num == 0){ceros += 1}
		else {positivos += 1}
	});
	return {'negativos':negativos, 'ceros':ceros, 'positivos':positivos}
}

function tres(){
	const res = contador([-1, 0, 1, 2, 0, 10]);
	document.write(JSON.stringify(res))
}


// Ejercicio4
function promedios(arr2D){
	const avg = [];
	arr2D.forEach(arr => {
		const prom = arr.reduce((a, b) => (a + b)) / arr.length;
		avg.push(prom);
	});
	return avg;
}

function cuatro(){
	const res = promedios([[1,2,3], [12,43,34], [120,24,398]]);
	document.write(JSON.stringify(res));
}


// Ejercicio5
function inverso(n){
	const arrNum = n.toString().split("");
	return parseInt(arrNum.reverse().join(""));
}

function cinco() {
	const num = window.prompt("Ingrese un número: ")
	const res = inverso(num);
	document.write(res);
}

//Ejercicio6
class recursion{
	constructor(x){
		this.a = x;
	}

	sumaIterativa(){
		let acum=0;
    	for(let i=1;i<=this.a;i++){
        	acum+=i;
    	}
    return acum;
	}
}

function seis(){
	num = window.prompt("Escribe el número");
	const object = new recursion(num);
	res = object.sumaIterativa();
	document.write(res);
}
