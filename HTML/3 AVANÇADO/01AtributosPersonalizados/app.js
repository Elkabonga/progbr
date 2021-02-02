let image = document.getElementById('like')

image.addEventListener('click', function () {
  // image.src = "../../../assets/images/thumbs-down.png"
  //o setAttribute acima é a mesma coisa que 'image.src =' abaixo neste caso

  let lastImage = image.getAttribute("src")
  image.setAttribute("src", "../../../assets/images/thumbs-down.png")

  console.log(lastImage);

  // vantagem do setAttribute é criar uma props no elemento e acessala

  image.setAttribute("cor", "vermelho")

})

let lista = document.getElementById('lista')
console.log(lista);

// peguei a props q é string e transformei em int com o parseInt
let num = parseInt(lista.getAttribute('num'))
console.log(num);

conteudo = ''

for (let i = 0; i < num; i++) {

  conteudo += '<li>' + (i + 1) + '</li>'

}

lista.innerHTML = conteudo