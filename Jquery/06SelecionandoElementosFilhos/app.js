// para selecionar diretamente um elemento especifico filho
// passa o pai e após o filho, no caso abaixo
// foi selecionado apenas para esconder 'hide()' o item 2 da lista1
// $('#lista1 > .item2').hide()
//-----------------------------------
// com o jquery podemos utilizar o find para procurar dentro
// de uma variável um elemento especifico tbm
// let lista1 = $('#lista1')
// lista1.find('.item2').hide()
// console.log(lista1);
//-----------------------------------
// com o children ele trás somente os filhos sem os netos...
// let lista1 = $('#lista1')
// console.log(lista1.children());
//-----------------------------------
// diferença maior é q o find precisa de seletor
// e o children não
let body = $('body')
console.log(body.children());
console.log(body.find());