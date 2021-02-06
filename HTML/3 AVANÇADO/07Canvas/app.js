let tela = document.getElementById('tela')
// console.log(tela);

// // 2 linhas
// let ctx = tela.getContext('2d')
// // console.log(ctx);

// ctx.moveTo(0, 0)
// ctx.lineTo(200, 200)
// ctx.lineTo(400, 0)
// ctx.stroke()
// ___________________________________


// retangulo
let ctx = tela.getContext('2d')
// console.log(ctx);

ctx.rect(10, 10, 100, 200)

ctx.fillStyle = 'blue'
// ctx.fillRect(10, 10, 100, 200)

ctx.lineWidth = 5
ctx.strokeStyle = 'red'
// ctx.strokeRect(10, 10, 100, 200)

ctx.fill()
ctx.stroke()

ctx.clearRect(20, 20, 30, 30)
