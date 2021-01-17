// crie um sistema que contenha descrição abaixo
// nome do aluno - nota 1 - nota 2 - média - aprovação

var nomes = [`igor`, `tiago`, `jão`]
var notas1 = [6.0, 7.5, 9.5]
var notas2 = [5.0, 10.0, 6.0]

function media(n1, n2) {
  return (n1 + n2) / 2
}

function aprovacao(media) {
  if (media >= 7) {
    return `aprovado`
  } else {
    return `reprovado`
  }
}

for (i in nomes) {
 var m = media(notas1[i], notas2[i])

  console.log(
    nomes[i] +
    ` - nota 1 = ` +
    notas1[i] +
    ` - nota 2 = ` +
    notas2[i] +
    ` -  média de ` +
    m +
    ` - ` +
    aprovacao(m))
}
