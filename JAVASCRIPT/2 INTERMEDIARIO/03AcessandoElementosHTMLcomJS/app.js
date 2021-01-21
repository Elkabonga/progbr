//  no console digitar
//  let p1 = document.getElementById("p1")

//  e digitar no console o seguinte comando
//  console.log(p1)

// terá o seguinte retorno referente ao id
//  <p class="paragrafo" id="p1">paragrafo 1</p> 
// ____________________________________________

//  agora no console digitar
//  let paragrafos = document.getElementsByClassName("paragrafo")

// e digitar 'paragrafos' terá o seguinte retorno referente as classes
// HTMLCollection(2) [p#p1.paragrafo, p.paragrafo, p1: p#p1.paragrafo]
// 0: p#p1.paragrafo
// 1: p.paragrafo
// length: 2
// p1: p#p1.paragrafo
// __proto__: HTMLCollection

// e se digitar no console
// for (let p of paragrafos){console.log(p)}

// tera o seguinte retorno do console
// <p class="paragrafo" id="p1">paragrafo 1</p>
// <p class="paragrafo">paragrafo 2</p>
// _____________________________________________

// agora para pegar pelas as tags é so utilizar o comando
// let th = document.getElementsByTagName("p")
// e digitar a variavel no caso 'th' tera o retorno
// HTMLCollection(3) [p#p1.paragrafo, p.paragrafo, p, p1: p#p1.paragrafo]
// 0: p#p1.paragrafo
// 1: p.paragrafo
// 2: p
// length: 3
// p1: p#p1.paragrafo
// __proto__: HTMLCollection
