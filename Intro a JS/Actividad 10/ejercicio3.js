// 3

// Dadas dos matrices de enteros, encuentra qué elementos faltan de la primer en la segunda matriz.

matriz = [7,2,5,3,5,3]
br = [7,2,5,4,6,3,5,3]

function revisarMatriz(arr1, arr2) {
  let nuevoArray = [];
  let i = 0;
  let control = i;

  for(let i = 0; i <= arr2.length; i++) {
    if(arr2[i] != arr1[i - control]){
      nuevoArray.push(arr2[i]);
      i++;
    }
  }
  return nuevoArray
}

console.log(revisarMatriz(matriz, br))
