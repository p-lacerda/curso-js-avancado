
const div = document.querySelector('.objects');
const btn = document.querySelector('#btn');
const form = document.querySelector('.form');

  const pessoas = [];

  function recebeEventoForm (event) {
    event.preventDefault();

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobre')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    div.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    function newObj () {
      return {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
      }
    }
    pessoas.push(newObj())
    console.log(pessoas)
  }
  form.addEventListener('submit', recebeEventoForm);
