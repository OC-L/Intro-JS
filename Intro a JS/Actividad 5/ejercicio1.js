// Construye un código bajo las siguientes reglas:
// -Itera arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0] utilizando un ciclo for
// -Imprime en consola los valores que sean mayores a 3

let arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for(let i = 0; i <= arreglo.length; i++) {
    if(arreglo[i] > 3){
        console.log(arreglo[i]);
    }
}