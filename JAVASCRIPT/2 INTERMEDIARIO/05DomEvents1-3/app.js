function h2Click() {
  console.log('clicou aqui')
}

function changeH2() {
  let input = document.getElementById('texto')
  let h2 = document.getElementsByClassName('h2')[0]
  h2.innerHTML = input.value
}

function changeH2WithThis(input) {
  let h2 = document.getElementsByClassName('h2WithThisAndOninput')[0]
  h2.innerHTML = input.value
}

function hideH1() {
  let h1 = document.getElementsByTagName('h1')[0]
  h1.style.display = 'none'
}