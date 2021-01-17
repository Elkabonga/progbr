var alunos = new Array(`igor`, `jose`, `maria`, `tiago`)

console.log(alunos)
console.log(alunos[0])
console.log(alunos[3])
console.log(alunos.length)

// for (let i = 0; i < alunos.length; i++) {
//   console.log(alunos[i])
// }

//mesma coisa em cima com o de baixo no array e for
// for (i in alunos) {
//   console.log(alunos[i])
// }

//mesma coisa em cima com o de baixo no array e for
for (aluno of alunos) {
  console.log(aluno)
}
