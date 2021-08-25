// Dados primitivos são imutaveis - string, 
// number, boolean, undefined, null - Copiados

//          0123
// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0]);

// Um dos exemplos de um tipo primitivo não ser mutavel é o fato do 
// index das strings não poderem ser alterados, o que 
// não acontece com arrays ou objetos, que podemos mudar o index

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b)


// Referência - Array, object, function - Passados por referência
let a = [1, 2, 3];
let b = a; // Referencia
// let b = [...a] // Copia, spread
console.log(a, b);

a.push(4);
console.log(a, b)

b.pop()
console.log(a, b)