// 1

// Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia y regresa como resultado, sus respectivas edades y la diferencia de edad.

const familia = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];

function diferenciaEdades() {
  let age = familia.map(function (obj) {
      return obj.age;
  })

  let joven = age.sort(function (a, b) {return a - b})[0]

  let viejo = age.sort(function (a, b) {return b - a})[0]

  console.log("El mas joven tiene " + joven + " años, y el mas viejo tiene " + viejo + " años. La diferencia es de " + (viejo - joven));
}

diferenciaEdades(familia);