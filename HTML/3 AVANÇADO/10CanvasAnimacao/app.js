let tela = document.getElementById('tela')

let ctx = tela.getContext('2d')
// console.log(ctx);

let circle = {
  x: 200,
  y: 200,
  raio: 100,
  inicio: 0,
  fim: 0.01 * Math.PI
}

function drawCircle(c) {

  ctx.beginPath()
  ctx.rect(0, 0, 400, 400)
  ctx.fillStyle = 'beige'
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.fillStyle = 'blue'
  ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
  ctx.fill()
  ctx.stroke()
}

setInterval(function () {
  if (circle.fim < 2 * Math.PI) {
    circle.fim += .01
    circle.x += .1
  }
  drawCircle(circle)
}, 0.01)
