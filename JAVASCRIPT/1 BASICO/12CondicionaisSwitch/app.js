var nota1 = 10.0
var nota2 = 6.9

var media = (nota1 + nota2) / 2

if (media >= 8) {
  conceito = `ótimo`
} else if (media >= 6.5) {
  conceito = `bom`
} else {
  conceito = `regular`
}

console.log(media);
console.log(conceito);

switch (conceito) {
  case `ótimo`:
    console.log(`parabéns você é um ótimo aluno`);
    break;
  case `bom`:
    console.log(`você esta quase perfeito`);
    break;
  case `regular`:
    console.log(`estude mais um pouco`);
    break;
  default:
    console.log(`houve algum erro`);
    break;
}
