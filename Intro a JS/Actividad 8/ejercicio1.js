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