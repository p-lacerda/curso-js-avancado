
// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Não pode modificar o valor de uma constante
// Utilizamos camelCase
// Case-sensitive
// NÃO UTILIZE VAR, UTILIZE CONST

const nome = 'João';
console.log(nome);

// String = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;
console.log(resultadoTriplicado);


console.log(typeof primeiroNumero);
console.log(typeof(primeiroNumero + segundoNumero));