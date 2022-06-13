// 9

// Crear un objeto que será llenado por una función dentro de sí mismo y no desde fuera. Por ejemplo:
// let myObject = {
//     myFunction: function ()...}
// myObject.myNewProp = "Hello world" // Esto deberia mostrar un error porque el objeto no puede ser llenado desde fuera.
// Añade cualquie tipo de elementos al objeto, siempre y cuando se llene mediante la función interna.

var objetoLlenar = {
    llenado: function() {
        Object.defineProperties(this,{

            "prop1":{
                value: "1",
                writable: false,
                enumerable: true,
            },

            "prop2":{
                value: "2",
                writable: false,
                enumerable: true
            },

            "prop3":{
                value: "3",
                writable: false,
                enumerable: true
            },
            
            "prop4":{
                value: "4",
                writable: false,
                enumerable: true
            }
        } )
    }
}
myObject.funcionLlenado()
console.log(objetoLlenar)