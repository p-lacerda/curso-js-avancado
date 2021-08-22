const name = "Paulo de Tasso"
const number = Math.floor(Math.random() * (24 - 0) + 0)
const number2 = Math.floor(Math.random() * (60 - 0) + 0)
function turn() {
    if(number < 12){
        return 'manhã'
    } else if (number >= 12 && number <= 18){
        return 'tarde'
    } else {
        return 'noite'
    }
}

console.log(`Meu nome é ${name}. Estou aprendendo JavaScript às ${number}:${number2} da ${turn()}`);