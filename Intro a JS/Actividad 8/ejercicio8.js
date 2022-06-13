// 8

// Escribir una función que reciba un objeto y un string. El string va a ser el nombre de una propiedad, y esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes. La función debe retornar true o false.

var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}

function myFunction(object, value) {
    console.log(Car.hasOwnProperty(value));
}

myFunction(Car, 'year');