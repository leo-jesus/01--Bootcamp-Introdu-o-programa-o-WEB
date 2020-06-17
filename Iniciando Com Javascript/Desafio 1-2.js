// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço:
// Rua: Rua Guilherme Gembala
// Número: 260

const Empresa = {
    nome: 'Rocketseat', 
    cor: 'Roxo', 
    foco:'Programacao', 
    endereco:{
        rua: 'Guilherme Gembala',
        numero: 260
    }
}

console.log(`A Empresa ${Empresa.nome} está localizada em ${Empresa.endereco.rua}, ${Empresa.endereco.numero}`)

// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }
// Por exemplo:

// const objeto = {
//   propriedade: [
//     { nome: "C++", especialidade: "Desktop" },
//     { nome: "JavaScript", especialidade: "Web/Mobile" }
//   ]
// };
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const Tecnologias = [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
]

const Programadores = [
    { nome: 'Leo', idade: 28 },
    { nome: 'Carlos', idade: 32  },
]

console.log(`O usuário ${Programadores[1].nome} tem ${Programadores[1].idade} anos e usa a tecnologia ${Tecnologias[0].nome} com a especialidade ${Tecnologias[0].especialidade}`)