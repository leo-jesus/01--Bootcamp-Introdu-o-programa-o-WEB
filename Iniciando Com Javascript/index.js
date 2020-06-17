//criar um rpograma que calcula a média
//das notas entre os students e envia 
//mensagem do cálculo da média 

const classA = [{
    name: 'Léo',
    grade: 9.8
},

{
    name: 'Tati',
    grade: 10
},
{
    name: 'Fulano',
    grade: 2
},
{
    name: 'Zezinho',
    grade: 6.34
}
]

const classB = [{
    name: 'Benedito',
    grade: 10
},

{
    name: 'Paulo',
    grade: 7
},
{
    name: 'Siclano',
    grade: 5
}
]

function calculateAvarage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const avarage = sum / students.length
    return avarage
}
const avarage1 = calculateAvarage(classA).toFixed(1)
const avarage2 = calculateAvarage(classB).toFixed(1)



function sendMessage(avarage, classes) {
    if (avarage > 5) {
        console.log(`the avarage of ${classes} was ${avarage}. consgrats!`)
    } else {
        console.log(`the avarage  ${avarage} of class ${classes} was not good enough.`)

    }
}


function markAsFluncked(student) {
    student.fluncked = false
    if (student.grade < 5) {
        student.fluncked = true
    }
}


function sendFlunckedMessage(student) {
    if (student.fluncked) {
        console.log(`O student ${student.name} da classes está fluncked!`)
    }
}

function studentsflunckeds(students) {
    for (let student of students) {
        markAsFluncked(student)
        sendFlunckedMessage(student)
    }
}

sendMessage(avarage1, 'classesA')
sendMessage(avarage2, 'classesB')

studentsflunckeds(classA)
studentsflunckeds(classB)