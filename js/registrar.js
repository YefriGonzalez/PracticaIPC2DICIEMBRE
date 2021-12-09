let correo=document.getElementById("correo");
let nombre=document.getElementById("nombre");
let pass=document.getElementById("pass");
let passverify=document.getElementById("passVerify");

function registrar(){
    if (pass.value===passverify.value) {
        console.log(correo.value);
        console.log(nombre.value);
        console.log(pass.value);
        alert("Registro Exitoso");
    } else {
        alert("Las contraseñas no coinciden");
    }

}