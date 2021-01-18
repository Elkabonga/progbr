function calcMedia(n1, n2) {
  return (this.notas[0] * 2 + this.notas[1]) / 2
}

var aluno1 = {
  name: `tiago`,
  notas: [7, 6],
  media: calcMedia
}

console.log(aluno1)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))

var aluno2 = {
  name: `jao`,
  notas: [6, 7],
  media: function () {
    return (this.notas[0] * 2 + this.notas[1]) / 2
  }
}

console.log(aluno2)
console.log(aluno2.media())

// calcMedia()