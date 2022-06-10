function mostrar(val) {
    document.getElementById("numeros").value += val
    return val
}

function resolver() {
    let x = document.getElementById("numeros").value
    let y = eval(x);
    document.getElementById("numeros").value = y
    return y
}

function limpiarPantalla() {
    document.getElementById("numeros").value = ""
}