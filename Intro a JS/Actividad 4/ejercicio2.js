// Recrea el problema 1, ahora usando do while.

let i = 0;
let numero = prompt('Escribe un número: ');

do {
    i++;
    if(i % 5 == 0){
        console.log(i + ' es múltiplo de 5.')
    }
} while( i <= numero )




