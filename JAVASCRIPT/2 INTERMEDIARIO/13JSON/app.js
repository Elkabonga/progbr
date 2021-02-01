let a = {
  nome: 'Tiago',
  nota: 9.5
}
console.log(a);

// JSON.stringify pega o objeto JS e transforma em string
let b = JSON.stringify(a)
console.log(b);

// JSON.parse pega o string e transforma em objeto JS
let c = JSON.parse(b)
console.log(c);

// tanto que podemos acessar o objeto depois de parseado
console.log(c.nome);
