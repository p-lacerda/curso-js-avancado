/**
* Aritméticos
* + Adição / Concatenação
* ** Potenciação
* % Resto da divisão
* / Divisão

*/ 

let num1 = 5;
let num2 = 10;
console.log(num1 + num2);

num1 = 10;
num2 = 5;
console.log(num1 % num2);

num1 = 5;
num2 = 2;
let num3 = 10;
console.log(num1 + num2 * num3)

/*
Incremento += 1
Decremento -= 1
Multi *= 1
Potenciação **=
*/

let contador = 1;
contador += 1;
console.log(contador)

contador = 2;
contador **= 10;
console.log(contador)

//NaN - Not a number
let numb1 = 10;
let numb2 = 'Luiz';
console.log(numb1 * numb2)

//Antigas para converter parseInt (inteiro), parseFloat (decimais)
// Nova
numb1 = 10;
numb2 = Number('5.2')
console.log(numb1 * numb2)