// ...
var pessoa = {
  name: 'tiago',
  idade: 33,
}

var contato = {
  telefone: 87654321,
  email: 'tisgo.slip@hotmail.com',
}

var copia = { ...pessoa, ...contato }

console.log(copia);

var notas_alunos1 = [10, 8, 6, 4]
var notas_alunos2 = [9, 7, 5, 3]

var todas_notas = [...notas_alunos1, ...notas_alunos2]

console.log(todas_notas);