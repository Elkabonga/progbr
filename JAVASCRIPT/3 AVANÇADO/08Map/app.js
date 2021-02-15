function novoAluno(nome, idade) {
  return { nome, idade }
}

let alunos = [
  novoAluno('Tiago', 33),
  novoAluno('José', 34),
  novoAluno('Ana', 8),
  novoAluno('Dani', 25)
]

function nomeEIdade(aluno) {
  return aluno.nome + " tem " + aluno.idade + " anos "
}

console.log(alunos.map(nomeEIdade));