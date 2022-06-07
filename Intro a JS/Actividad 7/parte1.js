// 1

function buscarPalabra(oracion, palabra){
    var array = oracion.split(" ")
    var existe = false
    for(var i = 0 ; i < array.length; i++){
        if(array[i] == palabra){
            existe = true
            break
        }
    }
    return existe
}
buscarPalabra("El perro corre por la calle", "calle")

 



// 2

var constNumbers = [1, 2, 3, 4, 10, 11];

function suma(arr){
    let suma = 0;
    for(let i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma;
}
suma(constNumbers);




// 3

function palindromo(palabra) {
     var palabra1 = palabra.split("").reverse()
     var reversa= ""
     for(var i =0; i<palabra1.length;i++){
         reversa = reversa + palabra1[i]
     }
     if(palabra==reversa){
         return true
     }
     else{return false}
}
palindromo("ana")



// 4

function conversionCaF(c){
    var caf = c * (1.8) + 32
     console.log(c + "°C son: " + caf + "°F")
}
conversionCaf(12)


function conversionFaC(f){
    var fac = (f - 32) * .5556
     console.log(f + "°F son: " + fac + "°C")
}
conversionFac(0)