
var nuevaTarea = document.querySelector("#nuevaTarea")
const publicar = document.querySelector("#publicar")
const tarea = document.querySelector("#parrafo")
const eliminarTarea = document.querySelector("#quitar")
const contenedor = document.querySelector("#contenedor")
const linea = document.querySelector("#nuevo")

publicar.addEventListener("click", (e) => {
    e.preventDefault();

    guardarTarea();

    publicarTarea();

    nuevaTarea.value = "";
});


function guardarTarea() {
    if(nuevaTarea){
        localStorage.setItem("Tarea", nuevaTarea.value);
    }
};


function publicarTarea() {

    let tarea = localStorage.getItem("Tarea")
    const lineaTarea = document.createElement("div");

    lineaTarea.classList.add("row");
    lineaTarea.innerHTML = `
    <div class="row" id="nuevo">
        <div class="col p-3 d-flex" id="linea">
                <p class="border bg-white text-black text-start" id="parrafo">${tarea}</p>
                <button class="botonEliminar ms-3 mb-1 border-0 mb-3" id="quitar" onclick="borrar();"><i class="bi bi-x"></i></button>
        </div>
    </div>
    `
    contenedor.appendChild(lineaTarea)
};


function borrar(){
    nuevo.remove();
};