// function loaded() {
//   let t = document.getElementById('teste')
//   // abaixo verifico se foi pego o elemento
//   // t.innerHTML = 'rrr'
//   t.onclick = mudarText

// }

// function mudarText() {
//   this.innerHTML = "Novo Texto"
// }

// _________________________________________

// segunda maneira de alterar o elemento com o "onclick"
function loaded() {
  let t = document.getElementById('teste')
  // abaixo verifico se foi pego o elemento
  // t.innerHTML = 'rrr'

  // t.addEventListener("click", mudarText)

  // podemos também usar outros eventos
  t.addEventListener("mouseover", mudarText)
  t.addEventListener("mouseout", mouseout)

}

function mudarText() {
  this.innerHTML = "Novo Texto"
}

function mouseout() {
  this.innerHTML = "Texto mouseout"
}
