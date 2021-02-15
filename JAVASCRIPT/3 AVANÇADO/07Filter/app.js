function novoAluno(nome, idade) {
  return { nome, idade }
}

let alunos = [
  novoAluno('Tiago', 33),
  novoAluno('José', 34),
  novoAluno('Ana', 8),
  novoAluno('Dani', 25)
]

// o for abaixo retorna todos os alunos com idade menor
// que 30
// for (let aluno of alunos) {
//   if (aluno.idade < 30) {
//     console.log(aluno.nome);
//   }
// }

// o filter faz exatamente a mesma coisa que o for acima
// porém criando um novo array mantendo o original
function temMenosDe30(aluno) {
  return aluno.idade < 30
}
function temMaisDe30(aluno) {
  return aluno.idade > 30
}

let alunosComMenosDe30 = alunos.filter(temMenosDe30)
let alunosComMaisDe30 = alunos.filter(temMaisDe30)

console.log(alunosComMenosDe30);
console.log(alunosComMaisDe30);
console.log(alunos);