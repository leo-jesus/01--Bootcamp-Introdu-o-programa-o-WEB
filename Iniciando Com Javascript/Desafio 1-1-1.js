const nome = "Silvana"
const sexo = "F"
const idade = 60
const contribuicao = 30

//-> Baseado nos valores acima utilize as fórmulas 
// a seguir para calcular se a pessoa está apta ou
// não para se aposentar e no fim imprima uma mensagem em tela.

//-> O tempo de contribuição mínimo para homens é de 35 anos e,
// para mulheres, 30 anos;

//-> Utilizando a regra 85-95, a soma da idade com o tempo de 
// contribuição do homem precisa ser de no mínimo 95 anos, 
// enquanto a mulher precisa ter no mínimo 85 anos na soma;

function PodeAposentar(nome, sexo, idade, contribuicao) {
    if (contribuicao > 34 && sexo == 'M' && idade + contribuicao > 94
        || contribuicao > 29 && sexo == 'F' && idade+contribuicao> 84){
            return `${nome}, você pode se aposentar!`
        }
        else{
            return `${nome}, NÃO pode se aposentar!`
        }
}

console.log(PodeAposentar(nome, sexo, idade, contribuicao))