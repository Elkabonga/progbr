console.log($('h1').text());
console.log($('h1').html());

// abaixo mostra a diferença do 'text' para o 'html'

console.log($('#lista1').text());
console.log($('#lista1').html());

// abaixo mostra como pegar um value de um elemento com o jquery

console.log($('#input').text()); // retorna vazio
console.log($('#input').html()); // retorna vazio
console.log($('#input').val());

// também da pra pegar o valor dos atributo do input com jquery

console.log($('#input').attr('type'))
console.log($('#input').attr('value'))
console.log($('#input').attr('id'))
console.log($('#input').attr('name'))
