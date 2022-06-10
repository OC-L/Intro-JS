// 1

// - Muestra en pantalla el valor de la propiedad name mediante dot notation
// - Muestra en pantalla el valor de la propiedad age mediante bracket notation
// - Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"

    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    console.log(student.name)
    console.log(student["age"])
    student.name = "Steve Jobs"


    console.log(student.name)





// 2

// * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };


    console.log(student)





// 3

// * Verifica si la propiedad name se encuentra dentro del siguiente objeto:

     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };


    console.log(student.hasOwnProperty("name"))





// 4

// Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 

     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };


    console.log(student)

    delete student["rollno"]

    console.log(student)





// 5

// Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto. La nueva edad debe ser 35.
 
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };


    student.age = 35

    console.log(student)




// 6

// Escriba un programa para añadir una nueva propiedad al siguiente objeto. La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

     var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };


    student.pet = "cat"




// 7

// Crea un código para llenar un objecto vacio:
//   Con las siguiente propiedades:
//     * color
//     * tamaño
//     * peso
//     * cantidad

const objeto7 = {}


const objeto71 = Object.create(objeto7);
objeto71.cantidad = 2
objeto71.color = "amarillo";
objeto71.peso = "2 gramos";
objeto71.tamaño = "enorme"

console.log(objeto71)




// 8

// una función que reciba un objeto y un string…
// El string va a ser el nombre de una propiedad, y
// esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
// la función debe retornar true o false

var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}





// 9

// Create an object that will be filled only by a function inside of it,
//     and not from someone outside of it's function.. example:
// let myObject = {
//     myFunction: function ()... // This function is supposed to fill this object
// }
// myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
// It supposed to be filled using it's own function
// Add any type of element on the object.. arrays, objects, int, strings, etc