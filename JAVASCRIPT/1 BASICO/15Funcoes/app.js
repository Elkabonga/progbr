function saudacao() {
  return `Olá Mundo!`
}

var s = saudacao()

console.log(s)

function media1(n1, n2) {
  var media = (n1 + n2) / 2
  return media
}

var resultado = media1(7, 9)

console.log(resultado)

//função anonima abaixo
var media2 = function (n1, n2) {
  return (n1 + n2) / 2
}

var resultado2 = media2(7, 9)

console.log(resultado2);

//arrow function
var media3 = (n1, n2) => {
  return (n1 + n2) / 2
}

var resultado3 = media3(7, 9)

console.log(resultado3);
