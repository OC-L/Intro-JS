// 7

// Crea un código para llenar un objecto vacio con las siguiente propiedades:
// * color, tamaño, peso, cantidad


Object.defineProperties(cars, {

    color: {
      value: 'red',
      numerable: true,
      writable: true
    },

    tamaño: {
        value: 12,
        numerable: true,
        writable: true
    },

    peso: {
      value: 18,
      numerable: true,
      writable: true
   },
   
    cantidad: {
      value: 3,
      numerable: true,
      writable: true
    },
  });
  
  console.log(cars);