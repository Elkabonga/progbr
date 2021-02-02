// Carne - 400gr por pessoa + de 3 horas + 200gr
// cerveja - 2000ml por pessoa + 3 horas + 1000ml
// refrigerante/agua - 1000ml por pessoa + 3 horas + 500ml

// crianças valem por 0.5 de carne e refrigerante

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

//ver se esta selecionado os elementos nas variáveis
// console.log(inputAdultos, inputCriancas, inputDuracao, resultado);

//ver se esta selecionado os valores dos elementos nas variáveis
// só acrescentar a prop value na tag do elemento com algum valor
// console.log(inputAdultos.value, inputCriancas.value, inputDuracao.value, resultado.value);

function calcular() {

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
  let qntTotalCerveja = cervejaPP(duracao) * adultos
  let qntTotalRefriAgua = refriAguaPP(duracao) * adultos + (refriAguaPP(duracao) / 2 * criancas)

  resultado.innerHTML = `<p>${qntTotalCarne / 1000}Kg de Carne</br></br>`
  resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja / 355)} latas de Cerveja</br></br>`
  resultado.innerHTML += `<p>${qntTotalRefriAgua / 1000}L. de Água/Refrigerante</br></br>`

  function carnePP(duracao) {
    if (duracao >= 12) {
      return 1200
    } else if (duracao >= 9) {
      return 1000
    } else if (duracao >= 6) {
      return 800
    } else if (duracao >= 3) {
      return 600
    } else {
      return 400
    }
  }

  function cervejaPP(duracao) {
    if (duracao >= 12) {
      return 5000
    } else if (duracao >= 9) {
      return 4000
    } else if (duracao >= 6) {
      return 4000
    } else if (duracao >= 3) {
      return 3000
    } else {
      return 2000
    }
  }

  function refriAguaPP(duracao) {
    if (duracao >= 12) {
      return 1500
    } else if (duracao >= 9) {
      return 1250
    } else if (duracao >= 6) {
      return 1000
    } else if (duracao >= 3) {
      return 750
    } else {
      return 500
    }
  }
}


