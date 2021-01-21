console.log(1);

let p = document.getElementById("p1");

console.log(p);
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);

// a tag 'p' perdera a class ficando na cor preta invés de vermelho

p.className = ""

// abaixo podemos modificar a tag 'p' para cor azul

p.style = "color:blue"

// abaixo pego o conteúdo da props e imprimo ela

let meuAtt = p.getAttribute("meuAtt")

console.log(meuAtt);

// abaixo modifico a props e imprimo ela

p.setAttribute("meuAtt", "elkabonga")

let meuAttAlterado = p.getAttribute("meuAtt")

console.log(meuAttAlterado);

// abaixo incluo nova props e imprimo ela

p.setAttribute("novoAtributo", "outro nome")

let novoAttu = p.getAttribute("novoAtributo")

console.log(novoAttu);