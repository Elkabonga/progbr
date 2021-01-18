// criando obj direto na variável
var a = {
  nome: `tiago`,
  sobrenome: `santos`
}
console.log(a)

// criando obj numa função com return
function objWith(n, s) {
  return { nome: n, sobrenome: s }
}
var b = objWith(`tiago`, `santos`)
console.log(b)

// criando obj numa função sem return
function objWithout(n, s) {
  this.nome = n
  this.sobrenome = s
}
var c = new objWithout(`tiago`, `santos`)
console.log(c)