/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Paulo de Tasso';
const sobrenome = 'Oliveira de Lacerda';
const idade = 18;
const peso = 55;
const alturaEmM = 1.74;
let imc = peso / (alturaEmM ** 2); // peso / (altura * altura)
let dataAtual = 2021;
let anoNascimento = dataAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaEmM} de altura e seu IMC é de ${imc}
${nome} nasceu em ${anoNascimento}`)