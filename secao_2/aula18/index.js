// Posso

// const array = [1, 2, 3];
// array.push(4);
// console.log(array);

// -------------------

// Objeto 

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25
// };

// console.log(pessoa)
// console.log(pessoa.nome)

// ---------------------

// function criaPessoa (nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);

// ---------------------

// This

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    // This é o contexto, nesse caso, a const pessoa1
  }
};

pessoa1.fala();