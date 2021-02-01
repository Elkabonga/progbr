let pessoas = ['Tiago', 'José', 'Marcos', 'Pâmela', 'Igor']

document.getElementById("array").innerHTML = JSON.stringify(pessoas.join(' - '))

function sortear() {
  let np = pessoas.length

  let ns = Math.floor(Math.random() * np)

  document.getElementById('display').innerHTML = pessoas[ns]

}