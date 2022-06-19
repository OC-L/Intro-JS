
const formBusqueda = document.querySelector("#form-busqueda")
const inputName = document.querySelector("#inputName")
const inputGenre = document.querySelector("#inputGenre")
const inputYear = document.querySelector("#inputYear")
const boxPeliculas = document.querySelector("#boxpeliculas")


const datosBusqueda = {
    nombre: "",
    genero: "",
    year: "",
};


document.addEventListener("DOMContentLoaded", () => {
    mostrarHTML(peliculas)
});


function mostrarHTML(peliculas) {

    limpiarHTML();
    peliculas.forEach( pelicula => {

        const {nombre, genero, year, descripcion, image} = pelicula;
        const cardPelicula = document.createElement("div");
        cardPelicula.classList.add("col", "mb-3");
        cardPelicula.innerHTML = `
        <div class="card bg-secondary flex-row">
            <div class="w-50">
                <img src="${image}" alt="" class="img-fluid">
            </div>
            <div class="card-body w-50">
                <h2 class="card-title">${nombre}</h2>
                <p class="card-text mb-3">Género: ${genero}</p>
                <p class="card-text mb-3">Año: ${year}</p>
                <p class="card-text mb-3">${descripcion}</p>
            </div>
        </div>
        `

        boxPeliculas.appendChild(cardPelicula);
    })
};



formBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();

    datosBusqueda.nombre = inputName.value;
    datosBusqueda.genero = inputGenre.value;
    datosBusqueda.year = inputYear.value;

    console.log(datosBusqueda)
    filtrarPeliculas();

    formBusqueda.reset();
});


function filtrarPeliculas() {
    const resultado = peliculas.filter( filtrarName ).filter( filtrarGenero ).filter( filtrarYear );
    

    if(resultado.length) {
        mostrarHTML(resultado)
    } else {
        sinResultado();
    }

    if (inputName.value == "" && inputGenre.value == "" && inputYear.value == ""){
        sinResultado();
    } else {
        mostrarHTML(resultado)
        boxPeliculas.parentElement.lastChild.remove();
    }
};


function filtrarName (pelicula) {
    const {nombre} = datosBusqueda;
    if(nombre) {
        return pelicula.nombre == nombre;
    }
    return peliculas;
};


function filtrarGenero (pelicula) {
    const {genero} = datosBusqueda;
    if(genero) {
        return pelicula.genero == genero;
    }
    return peliculas;
};


function filtrarYear (pelicula) {
    const {year} = datosBusqueda;
    if(year) {
        return pelicula.year == year;
    }
    return peliculas;
};


function limpiarHTML() {
    boxPeliculas.innerHTML = "";
    while(boxPeliculas.firstChild) {
        boxPeliculas.firstChild.remove(cardPelicula);
    }
};


function sinResultado() {
    limpiarHTML();

    const sinResultado = document.createElement("div");
    sinResultado.classList.add("bg-danger", "text-white", "border", "p-4", "text-center");
    sinResultado.textContent = "No hay resultados de búsqueda";

    if(boxPeliculas.parentElement.children.length < 2) {
        boxPeliculas.parentElement.appendChild(sinResultado);
    }
};
