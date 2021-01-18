// function criarAluno(nome, n1, n2) {
//   return {
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function () {
//       return (this.nota1 + this.nota2) / 2
//     }
//   }
// }

// var turma = [
//   criarAluno(`tiago`, 8, 10),
//   criarAluno(`jao`, 6, 8),
//   criarAluno(`marcela`, 6, 8)
// ]

// var aluno = turma[1]

// console.log(aluno)
// console.log(aluno.media())

// turma.forEach(function (elemento) {
//   console.log(elemento)
// })

// //abaixo mostro como trabalhar mais na apresentação dos dados
// for (aluno of turma) {
//   console.log(
//     `nome: ` + aluno.nome +
//     ` nota 1: ` + aluno.nota1 +
//     ` nota 2: ` + aluno.nota2 +
//     ` media: ` + aluno.media()
//   )
// }

function aluno(nome, n1, n2) {
  this.nome = nome
  this.nota1 = n1
  this.nota2 = n2
  this.media = function media() {
    return (this.nota1 + this.nota2) / 2
  }
}

var a = new aluno(`tiago`, 8, 10)
var b = new aluno(`jao`, 6, 9)

console.log(a)
console.log(a.media())

console.log(b)
console.log(b.media())