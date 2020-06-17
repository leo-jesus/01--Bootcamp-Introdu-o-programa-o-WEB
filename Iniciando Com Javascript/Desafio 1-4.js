// Intro
// Crie um programa para realizar operações bancárias na conta de um usuário.
// Comece criando um objeto com o nome do usuário, suas transações e saldo.
// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}
//   Adicionar transações
// Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário,
// essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

function createTransaction(user, operationType, operationValue) {
    //     O type pode ser credit para créditos e debit para débitos da conta do usuário.
    // Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.
    // Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.
    // Dica.: Você pode usar o método user.transactions.push(transaction) para adicionar um novo item no array de transações.


    if (operationType == 'credit') {
        user.transactions.push({ type: operationType, value: operationValue })
        user.balance += operationValue
        return user
    } else if (operationType == 'debit') {
        user.transactions.push({ type: operationType, value: operationValue })
        user.balance -= operationValue
        return user

    } else {
        return console.log('No valid transition')
    }


}

// Relatórios
// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre 
// as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
function getHigherTransactionByType(operation) {
    var indexSort = 0
    var higherOperation = 0
    for (let u of user.transactions) {
        if (operation == u.type && indexSort < u.value) {
            indexSort = u.value
            higherOperation = u
        }
    }
    return console.log('The Higher operation is: ', higherOperation)
}


//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:

function getAverageTransactionValue() {
    let average = 0
    for (let u of user.transactions) {
        average += u.value
    }
    return average = average / user.transactions.length
}



// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit,
// o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
function getTransactionsCount() {

    let transactionCouter = {
        credit: 0,
        debit: 0
    }

    for (let u of user.transactions) {
        if (u.type == 'credit') {
            transactionCouter.credit++
        } else {
            transactionCouter.debit++
        }
    }
    console.log(transactionCouter)

}


createTransaction(user, 'credit', 50)
createTransaction(user, 'debit', 30)
createTransaction(user, 'credit', 120)
createTransaction(user, 'debit', 80)

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }