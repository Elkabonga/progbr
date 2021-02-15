var aluno = {
  matricula: 1,
  nome: 'Tiago',
  telefone: 98764321,
  cidade: 'Osasco',
}

var { matricula, nome } = aluno

console.log(matricula, nome);

// abaixo criamos uma copia do obj
// var { ...copia } = aluno
// copia.matricula = 2
// console.log(copia);
// console.log(aluno);

// abaixo criamos uma copia do obj sem o nome como exemplo
// var {nome,  ...copia } = aluno
// console.log(copia);
// console.log(aluno);

// tbm funciona com array
var aluno1 = {
  matricula: 1,
  nome: 'Tiago',
  telefone: 98764321,
  cidade: 'Osasco',
}

var aluno2 = {
  matricula: 2,
  nome: 'Ana',
  telefone: 1111111,
  cidade: 'SP',
}

var aluno3 = {
  matricula: 3,
  nome: 'José',
  telefone: 222222,
  cidade: 'RJ',
}

var alunos = [aluno1, aluno2, aluno3]

var [tiago, ...outros] = alunos

console.log(tiago, outros);