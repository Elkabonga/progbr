let url = 'https://api.exchangeratesapi.io/latest?base=USD&symbol=BRL'

function converter() {
  let input = document.getElementById('valor')
  let valor = input.value

  fetch(url)
    .then((res) => {
      // console.log(res);
      return res.json()
    })
    .then((data) => {
      let rate = data.rates.BRL
      
      valorArredondado =
      parseFloat(Math.round(rate * valor) * 100 / 100).toFixed(2)

  let resultado = `${valor} dólar americano = ${valorArredondado} reais`
  document.getElementById('resultado').innerHTML = resultado

})

}