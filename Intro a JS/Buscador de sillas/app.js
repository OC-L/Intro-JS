
const formulario = document.querySelector("#formulario")
const busqueda = document.querySelector("#inputSearch")
const contenedor = document.querySelector("#contenedor")
const contenedor2 = document.querySelector("#contenedor2")
const filtro1 = document.querySelector("#filtro1")

const busquedaDatos = {
    nombre: "",
};

const busquedaMarca1 = {
    marca: "1",
};

const busquedaMarca2 = {
    marca: "2",
};

const busquedaMarca3 = {
    marca: "3",
};

const busquedaMarca4 = {
    marca: "4",
};



document.addEventListener("DOMContentLoaded", () => {
    mostrarHTML(muebles)
});


function mostrarHTML(muebles) {

    limpiarHTML();
    muebles.forEach( mueble => {

        const {nombre, precio, estilo, marca} = mueble;
        const cardMueble = document.createElement("div");
        cardMueble.classList.add("col-3");
        cardMueble.innerHTML = `
        <div class="col-12 text-center">
            <img src="./Imágenes/silla.jpg" class="img-fluid image">
            <p class="mb-0">${nombre}</p>
            <p>${precio}</p>
        </div>
        `
        contenedor2.appendChild(cardMueble);
    })
};


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //limpiarHTML();

    busquedaDatos.nombre = busqueda.value;
    
    filtrarMuebles();

    formulario.reset();
});


function filtrarMuebles() {

    const resultados = muebles.filter( filtrarNombre );

    console.log(resultados)

    if(resultados.length) {
        mostrarHTML(resultados)
    } else {
        sinResultado();
    }
};


function filtrarNombre (mueble) {
    const {nombre} = busquedaDatos;
    if(nombre){
        return mueble.nombre == nombre
    }
    return muebles;
};


function limpiarHTML() {
    contenedor2.innerHTML = "";
    while(contenedor2.firstChild){
        contenedor2.firstChild.remove(cardMueble);
    }
};


function sinResultado() {
    limpiarHTML();

    const sinResultado = document.createElement("div");
    sinResultado.classList.add("bg-danger", "text-white", "border", "text-center", "col-12", "h-25", "pt-2");
    sinResultado.textContent = "No hay resultados de búsqueda";

    if(contenedor2.children.length < 2) {
        contenedor2.appendChild(sinResultado);
    }
};


function Marca1() {

    let marca1 = muebles.filter(filtrarMarca1);
    
    console.log(marca1)

    if(marca1) {
        mostrarHTML(marca1);
    }
};

function filtrarMarca1(mueble) {
    const {marca} = busquedaMarca1;
    if(marca) {
        return mueble.marca == marca
    }
};

function Marca2() {

    let marca2 = muebles.filter(filtrarMarca2);
    
    console.log(marca2)

    if(marca2) {
        mostrarHTML(marca2);
    }
};

function filtrarMarca2(mueble) {
    const {marca} = busquedaMarca2;
    if(marca) {
        return mueble.marca == marca
    }
};


function Marca3() {

    let marca3 = muebles.filter(filtrarMarca3);
    
    console.log(marca3)

    if(marca3) {
        mostrarHTML(marca3);
    }
};

function filtrarMarca3(mueble) {
    const {marca} = busquedaMarca3;
    if(marca) {
        return mueble.marca == marca
    }
};

function Marca4() {

    let marca4 = muebles.filter(filtrarMarca4);
    
    console.log(marca4)

    if(marca4) {
        mostrarHTML(marca4);
    }
};

function filtrarMarca4(mueble) {
    const {marca} = busquedaMarca4;
    if(marca) {
        return mueble.marca == marca
    }
};

function inicio() {
    mostrarHTML(muebles);
};