function novoAluno(nome, idade) {
  return { nome, idade }
}

let alunos = [
  novoAluno('Tiago', 33),
  novoAluno('José', 34),
  novoAluno('Ana', 8),
  novoAluno('Dani', 25)
]

function idadeDaTurma(total, aluno) {
  return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0));

// tbm funciona com strings

function nomezaoDaTurma(nomezao, aluno) {
  return nomezao + aluno.nome
}

console.log(alunos.reduce(nomezaoDaTurma, ''));
