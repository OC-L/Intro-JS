// 5

// Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:

const a = [1,2,3]
const b = ["a", "b", "c"]

function combinar(arreglo1, arreglo2){
    let nuevoArray=[];
    for(let i=0; i<arreglo1.length; i++){
      nuevoArray.push(arreglo1[i]);
      nuevoArray.push(arreglo2[i]);
    }
  
    return nuevoArray;
  }

  console.log(combinar(a,b));