// 1

// Escriba una función de JavaScript que tomará una serie de números almacenados y encontrará el segundo número más bajo y segundo más alto respectivamente, del siguiente arreglo:  

const arreglo = [3,4,6,1,5,2,9,10,23,12]

function encontrarNumeros(arreglo) {
    arreglo.sort(function(a, b) {
        return a-b
    });
    console.log("El segundo número más alto es " + arreglo.at(-2))
    console.log("El segundo número más bajo es " + arreglo.at(1))
};

encontrarNumeros(arreglo)