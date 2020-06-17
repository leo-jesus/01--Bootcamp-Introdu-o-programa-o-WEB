// Usuários e tecnologias
// Criando um array de usuários (objetos), 
//cada usuário tem um nome e suas tecnologias (novo array):

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

//Percorrendo a lista de usuários com uma estrutura de repetição 
//imprimindo em tela as informações dos usuários por meio de uma função:
function percorreArray(array) {
    for (let a of array) {
        console.log(`${a.nome}, trabalha com ${a.tecnologias}`)
    }

}

//percorreArray(usuarios)

// Busca por tecnologia
// Baseado no desafio anterior, utilizando a mesma lista de usuários construída:
//uma função que recebe os dados de um objeto de usuário e retorna 
//SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
function trabalhaComCSS(array) {
    for (let a of array) {
        if (a.tecnologias.indexOf('CSS')) {
            console.log(`${a.nome}, trabalha com CSS`)
        }
    }
}

//trabalhaComCSS(usuarios)

// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de 
//usuários e no fim retorna o saldo (receitas - despesas).

const usuarios2 = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

// Percorra o array de usuários e para cada usuário chame uma 
// função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(array) {
    // Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles 
    // e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:
    var total = 0
    for (let a of array) {
        total = somaNumeros(a.receitas) - somaNumeros(a.despesas)
      
        if (total >= 0) {
            console.log(`${a.nome}, possui saldo POSITIVO de ${total.toFixed(2)}`)
        } else {
            console.log(`${a.nome}, possui saldo NEGATIVO de ${total.toFixed(2)}`)

        }
    }
}
calculaSaldo(usuarios2)

function somaNumeros(numeros) {
    var soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}
