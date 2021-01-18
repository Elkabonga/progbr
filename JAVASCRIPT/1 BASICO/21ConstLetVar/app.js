var numero1 = 4
let numero2 = 5
const numero3 = 6

numero1 = 7
numero2 = 7
// numero3 = 7 aqui não pode pq ja esta atribuído o valor na const

console.log(numero1, numero2, numero3)

{
  var numero4 = 1
  let numero5 = 2
  const numero6 = 3
}

console.log(numero4)
// console.log(numero5) fora do escopo
// console.log(numero6) fora do escopo