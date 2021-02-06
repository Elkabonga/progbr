let tela = document.getElementById('tela')

let ctx = tela.getContext('2d')
// console.log(ctx);

ctx.beginPath()

ctx.lineWidth = 4
ctx.strokeStyle = 'red'
ctx.moveTo(10, 10)
ctx.lineTo(300, 250)
ctx.stroke()

ctx.beginPath()

ctx.lineWidth = 4
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'green'
ctx.moveTo(80, 80)
ctx.lineTo(370, 320)
ctx.lineTo(270, 320)
ctx.closePath()
ctx.stroke()
ctx.fill()