function greeting () {
    let userName = 'Razo'; //variable de alcanze de funcion

    function displayUserName () {
        return `Hello ${userName}`; //mostrar el username
    }

    // Al final retornamos la funcion que muestra el ususario
    return displayUserName;
}

const g = greeting(); //variable que abrevie la funcion
console.log(g); //ver lo que tiene la funcion g
console.log(g());//ejecutar la funcion g 