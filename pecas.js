const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 50;

if (peso >= 100) {
    console.log("Peso da peça está adequado")
} else {
    console.log("Peso insuficiente")
}

let nomepeca = "Disco de Freio"

if (nomepeca.length > 3) {
    console.log("Cadastro Permitido")
} else if (nomepeca.length == 0) {
    console.log("nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}

switch (nomepeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres")
        break;

    default:
        console.logo("Nome adequado")
        break;
}

//  = -> Atribuição de valor, recebe
// == -> Verifica se o valor é igual
// === Verifica se o valor, e o tipo de dado, são iguais


