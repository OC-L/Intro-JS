var numero1 = prompt('Ingresa el primer número: ');
var numero2 = prompt('Ingresa el segundo número: ');
var numero3 = prompt('Ingresa el tercer número: ');

if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log('El ' + numero1 + ' es el mayor.');
    } else if (numero1 == numero3) {
        console.log('Dos números son iguales: ' + numero3);
    } else {
        console.log('El ' + numero3 + ' es el mayor.');
    }

    

} else if(numero2 > numero3) {
    if (numero2 > numero3) {
        console.log('El ' + numero2 + ' es el mayor.');
    } else if (numero2 == numero3) {
        console.log('Dos números son iguales: ' + numero3);
    } else {
        console.log('El ' + num3 + ' es mayor');
    }

} else if (numero1 == numero2) {
    if (numero2 > numero3) {
        console.log('Dos números son los mayores: ' + numero2);
    } else if (numero2 < numero3) {
        console.log('El ' + numero3 + ' es el mayor.');
    } else {
        console.log('Tres números son iguales: ' + numero2);
    }
}