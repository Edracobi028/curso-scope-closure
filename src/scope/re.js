var firstName; // Declarar como Undefined
firstName = 'Oscar'; //Asignar
console.log(firstName);

var lastName = "Davis"; //Declarar y asignar
lastName = 'Ana'; //reasignar
console.log(lastName);

var secondName = 'David'; //Declarar y asignar
var secondName = 'Ana'; //Se redeclarar
console.log(secondName);

// Let
let fruit = 'Apple';
fruit = 'Kiwi';

//let fruit = 'Banana'; // No es posible redeclarar

//const
const animal = 'perrito'; //Declara y asigna
// animal = 'cat';         //no se puede reasignado
// const animal = 'Snake'; //No se puede redeclarar y asiganr
console.log(animal);

//Si const es otro tipo como un array si es posible manipular
const vehicles = [];
vehicles.push("x");
console.log(vehicles);

vehicles.pop(); //quitar el ultimo elemento de array
console.log(vehicles);