
const usuarioCorrecto = "QWERTY12345"
const passCorrecta = "QWERTY12345"
const formulario = document.querySelector("#form-busqueda")
let usuario = document.querySelector("#inputName")
let contra = document.querySelector("#inputContra")

const texto = document.querySelector("#detalles")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    guardar();

    validar();

    formulario.reset();
})


function guardar (){
    if(usuario.value && contra.value) {
        localStorage.setItem("Usuario", usuario.value);
        localStorage.setItem("Contra", contra.value);
    } 
}


function validar (){
     if(usuario.value == usuarioCorrecto && contra.value == passCorrecta){
        location.href = "./mensaje.html";
     } else if (usuario.value != usuarioCorrecto && contra.value != passCorrecta) {
        alert("Datos incorrectos");
     }
}


function mostrarContra() {
    var x = document.getElementById("inputContra");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


function nuevoContenido() {
    let inputUsuario = localStorage.getItem("Usuario");
    let inputPass = localStorage.getItem("Contra");

    texto.innerHTML = `Tu número de usuario es ${inputUsuario} y tu contraseña es ${inputPass}`
}