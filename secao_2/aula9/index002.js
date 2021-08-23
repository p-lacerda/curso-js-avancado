// String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined => não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo => não aponta para local nenhum na memória 

const aprovado = false; // Boolean => true, false

console.log(typeof sobrenomeAluno, sobrenomeAluno);

// Dados por referência
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);