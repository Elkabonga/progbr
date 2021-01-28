// entendendo o conceito de parentes nas funções

function ret3() {
  console.log(3)
  return 5
}
// ao digitar no console ret3 aparecera a mensagem abaixo
// ƒ ret3() {
//   console.log(3);
//   return 5
// }

// ao digitar no console ret3() retornara o valor de
// 3
// 5

let ret5 = ret3()

console.log(ret5);