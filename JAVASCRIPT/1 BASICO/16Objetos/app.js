var aluno = {
  name: `jão`,
  notas: [7.5, 9]
}
var novaProp = `lastname`
aluno.matricula = 1234
aluno[novaProp] = `oliveira`

console.log(aluno)

var novoObjeto1 = new Object()
novoObjeto1.name = `tiago`
novoObjeto1.notas = [8, 7]
novoObjeto1.matricula = 0001
novoObjeto1.lastname = `santos`

console.log(novoObjeto1);

var novoObjeto2 = new Object({
  name: `bibi`,
  notas: [6, 10],
  matricula: 2,
  lastname: `fifi`,
})

console.log(novoObjeto2);