var numero = 5

for (let i = 0; i < numero; i++) {
  console.log(`executando for pela ` + (i + 1) + ` vez`)
}

console.log(`fim do for`)

while (numero < 10) {
  console.log(`numero do while ` + numero)
  numero++
}

console.log(`fim do while`)

var numberRandom = Math.random() * 100

while (numberRandom < 90) {
  console.log(`numero menor q 90 >>> ` + numberRandom);
  numberRandom = Math.random() * 100
}
console.log(`numero maior q 90 >>> ` + numberRandom);
console.log(`acabou`);