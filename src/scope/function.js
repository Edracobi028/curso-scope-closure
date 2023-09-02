//Function Scope
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') { //Triple igualdad (===) valor y tipo
        console.log(`Hello ${userName}!`); //Usamos template string (``) para no concatenar y poder usar variables
    }
}

greeting();
console.log(userName);