// 2

// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 

const numbers = [ 1, -4, 12, 0, -3, 29, -150];
let total = 0;

function suma(numbers) {
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0) {
            total += numbers[i]
        }
    }
    console.log(total)    
};

suma(numbers)