var numero = 0

function mudarCor() {
  let h = document.getElementsByTagName('h2')[0]
  h.style.color = 'red'
}

function mudarCor2() {
  let h = document.getElementsByTagName('h2')[0]
  h.style.color = 'green'
  h.innerHTML += " " + numero
  numero++
}

function mudarTexto() {
  let h = document.getElementsByTagName('h2')[0]
  h.innerHTML = "Novo Texto"

  setTimeout(mudarCor, 1000)
  interval = setInterval(mudarCor2, 2000)

}

var interval

function mudarTextoCor() {
  let c = document.getElementById('contagem')
  c.style.color = 'green'
  c.innerHTML += " " + numero
  numero++
}

function iniciar() {
  interval = setInterval(mudarTextoCor, 1000)
}

function parar() {
  clearInterval(interval)
}


function iniciar2() {
  timer = setTimeout(mudarTextoCor2, 1000)
}

function parar2() {
  clearTimeout(timer)
}

function mudarTextoCor2() {
  let d = document.getElementById('contagem2')
  d.style.color = 'green'
  d.innerHTML += " " + numero
  numero++
}
