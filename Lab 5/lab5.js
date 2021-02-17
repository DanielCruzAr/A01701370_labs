function validate(){
    let p1 = document.getElementById("password1").value;
    let p2 = document.getElementById("password2").value;

    let spaces = false;
    let cont = 0;

    while(!spaces && cont<p1.length){
        if (p1.charAt(cont) == " "){
            spaces = true;
        }
        cont++;
    }

    if (spaces) {
        alert ("La contraseña no puede contener espacios en blanco");
        return false;
    } 
    
    else if (p1 != p2){
        alert("Las contraseñas no coinciden");
        return false;
    }

    else if (p1.length == 0 || p1.length < 6){
        alert("La contraseña debe contener un mínimo de 6 caracteres")
    }

    else{
        alert("Contraseña aceptada");
        return true;
    }
}

const formulario = document.getElementById("forms")
formulario.onsubmit = function(){validate()};