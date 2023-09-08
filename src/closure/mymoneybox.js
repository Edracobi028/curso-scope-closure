// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;  //asignar en forma de adicion (+=)
//     console.log(`MoneyBox: $${saveCoins}`);
// }

function moneyBox() {
    let saveCoins = 0; //inicializar en cero por si hay una nueva cuenta
    //hacer un closure 
    function countCoins (coins){
        saveCoins += coins;  //sumar las monedas con adicion (+=)
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins; //retornar para poder utilizar
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);