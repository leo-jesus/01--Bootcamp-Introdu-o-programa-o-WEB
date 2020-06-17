// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa

const nome = 'Carlos'
const peso = 110
const altura = 1.88

// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

function calculoIMC(nome, peso, altura) {
    // A partir desses dados armazene em uma constante chamada imc
    // o cálculo do índice de massa corporal definido pela fórmula abaixo:
    const IMC = peso / (altura * altura)
    
    if (IMC >= 30) {
        return `${nome}, você está acima do peso`
    } else {
        return `${nome}, você não está acima do peso`
    }

}

console.log(calculoIMC(nome, peso, altura))