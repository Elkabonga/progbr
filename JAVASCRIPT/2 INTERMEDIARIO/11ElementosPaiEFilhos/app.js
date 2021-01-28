window.onload = function () {
  let d1 = document.getElementById('d1')
  // aqui eu imprimo todos os filhos do meu ID
  console.log(d1.children);
  let h2 = d1.children[0]
  let p = d1.children[1]
  console.log(h2);
  console.log(p);

  // aqui eu imprimo o pai do meu elemento
  console.log(h2.parentElement);

  // aqui eu imprimo os filhos do body
  console.log(document.body.children);

  // aqui vou acrescentar o evento click e imprimir o elemento h2
  let hh2 = document.getElementsByTagName('h2')

  for (let h of hh2) {
    console.log(h);
    h.addEventListener('click', qop)
  }
  
  function qop(e) {
    let t = e.target
    console.log(t.parentElement);
  }

}

