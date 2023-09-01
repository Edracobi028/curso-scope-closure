//variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; //global
//funcion que pueda leer la variable Global
function bestFruit() {
    console.log(fruit);
}
bestFruit();


function countries() {
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);


