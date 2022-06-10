// 9

// Crear un objeto que será llenado por una función dentro de sí mismo y no desde fuera. Por ejemplo:
// let myObject = {
//     myFunction: function ()...
// }
// myObject.myNewProp = "Hello world" // Esto deber'ia mostrar un error porque el objeto no puede ser llenado desde fuera.
// Añade cualquie tipo de elementos al objeto, siempre y cuando se llene mediante la función interna.

var objetoLlenar = {
    funcionLlenado: function() {
        Object.defineProperties(this,{

            "modelo":{
                value: "2020",
                writable: false,
                enumerable: true,
            },
            "capacidad":{
                value: 22,
                writable: false,
                enumerable: true
            },
            "peso":{
                value: 50,
                writable: false,
                enumerable: true
            },
            "edad":{
                value: 3222,
                writable: false,
                enumerable: true
            }
        } )
    }
}
myObject.funcionLlenado()
console.log(objetoLlenar)