//Ambito lexico dice que la accesibilidad de las variables esta determinada por la posicion de las mismas dentro de los ambitos anidados
const myGlobal = 0;

function myFunction (){
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //function interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(myGlobal, myNumber, inner);
        }

        return child(); //returnar la funcion hija
    } 

    return parent(); //returnar la funcion padre
}

//llamar la funcion para ver como las variables vas a ser accedidas y transmitidas
myFunction();