// // setItem salva um dado na memoria do navegador
// localStorage.setItem('nome', 'tiago')

// // getItem pega um dado na memoria do navegador
// let n = localStorage.getItem('nome')
// console.log(n);

// // removeItem deleta um dado na memoria do navegador
// localStorage.removeItem('nome')
// console.log(n);

// ________________________________________________
// abaixo atualizo o h2 a qnd atualizo a pagina ele mantem
// a informação do localStorage no h2
// onload = function () {
//   let nome = localStorage.getItem('nome')
//   let h2 = document.getElementById('nome')
//   h2.innerHTML = nome
// }

// function atualizar(e) {
//   let valor = e.value
//   console.log(valor);

//   let h2 = document.getElementById('nome')
//   h2.innerHTML = valor

//   localStorage.setItem('nome', valor)
// }

// _____________________________________
// o local storage só armazena string mas usando
// JSON podemos transformar os dados em objeto JS
let a = { nome: 'Tiago', n1: 7.3 }
localStorage.setItem('aluno', JSON.stringify(a))

let b = localStorage.getItem('aluno')
console.log(b);
console.log(JSON.parse(b));

// o localStorage só armazena os dados por domínio
