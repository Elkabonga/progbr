// atribuição por valor, faz uma copia do original
// qualquer alteração não reflete no original

// atribuição por referencia não faz copia, é um novo
// apelido para o objeto original, qualquer alteração
// no novo elemento afeta tbm o original

let alunoA = { nome: 'Tiago', idade: '15' }
let alunoB = alunoA

alunoB.idade = 25

console.log(alunoA, alunoB);

let alunoC = 15
let alunoD = alunoC

alunoD = 25

console.log(alunoC, alunoD);

let turmaA = ['tiago', 'jose', 'santos']
let turmaB = turmaA

// turmaB.push('joao')

console.log(turmaA, turmaB);

let turmaC = turmaA.slice()
turmaC.push('joao')

console.log(turmaC, turmaA);