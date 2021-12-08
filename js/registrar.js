let nombres=document.getElementById("nombre");
let apellidos=document.getElementById("apellido");
let fecha=document.getElementById("fecha");
let pass=document.getElementById("password");
let passverify=document.getElementById("passwordVerify")

function registrar(){
    if (pass.value===passverify.value) {
        console.log(nombres);
        console.log(apellidos);
        console.log(fecha);
        console.log(pass);
        alert("Registrado con Exito");
    }else{
        alert("Las contraseñas no coninciden");
    }

}