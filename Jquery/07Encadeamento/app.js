// o sinal de '$' no jquery é uma função
// ao imprimir o mesmo elemento porém um no jquery
// e o outro no JS fica nítido a diferença de ambos
// let jq = $('#lista1')
// console.log(jq);

// let js = document.getElementById('lista1')
// console.log(js);
// // _______________________________

// agora repara que o retorno no caso de uma 'ul'
// o jquery traz um array que nos permite fazer um chaining
// let jq = $('ul')
// console.log($());
// console.log(jq);
// // _______________________________

// com isso agora podemos encadear funções com JQuery
// como no caso abaixo
// let jq = $('#lista1')
//   .slideUp(1000)
//   .slideDown(1000)
//   .fadeOut(1000)
//   .fadeIn(1000)
// console.log(jq);
// resumindo o jquery sempre retorno o próprio objeto
// _______________________________

// pra ficar mais claro
let objeto = {
  print10: function () {
    console.log(10);
    return this
  },
  print20: function () {
    console.log(20);
    return this
  }
}
objeto.print10().print20().print10().print20()

// a logica do jquery na maioria das vezes é
// conforme o objeto acima