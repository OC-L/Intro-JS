// Usando while, crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5, desde 1 hasta el número introducido por el usuario.

let i = 0;
var numero = prompt('Escribe un número: ');

while(i <= numero){
    i++;
    if(i % 5 == 0){
        console.log(i + " es múltiplo de 5.");
    }
}