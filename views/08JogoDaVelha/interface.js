document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll('.square')

  squares.forEach((square) => {
    square.addEventListener('click', handleClick)
  })

})

function handleClick(event) {

  let square = event.target
  let position = square.id

  if (handleMove(position)) {

    setTimeout(() => {
      alert('O game acabou o vencedor foi o Player = ' + (playerTime + 1))
    }, 100)
  }
  updateSquare(position)

}

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {
  let squares = document.querySelectorAll('.square')
  squares.forEach((square) => {
    let position = square.id
    let symbol = board[position]

    if (symbol != '') {
      square.innerHTML = ''
    } else if (square.firstChild != undefined) {
      square.removeChild(square.firstChild)
    }

  })
}

function reset() {

  board = ['', '', '', '', '', '', '', '', '']   //zerou array
  playerTime = 0 // reinicia a vez 
  gameOver = false // Possibilita movimentos no quadro
  updateSquares()

}