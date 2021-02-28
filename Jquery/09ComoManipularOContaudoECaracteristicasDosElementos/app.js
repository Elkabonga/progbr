console.log($('h2').text('Minha Lista de Compras'));
console.log($('h2').html('Minha Lista de Compras 2'));

// agora para mudarmos um elemento da lista temos q usar o find no text
console.log($('#lista1').find('.item1').text('Novo Item 1'));
// o mesmo com o html
console.log($('#lista1').find('.item2').html('Novo Item 2'));
// ________________________

// agora na list tem uma diferença do text para o html
// com o html mantemos o padrão da list
// console.log($('#lista1').html('<li class="item1">Item 1</li><li class="item2">Item 2</li>'));
// com o text o navegador entendera como texto e não as tags do html
// console.log($('#lista1').text('<li class="item1">Item 1</li><li class="item2">Item 2</li>'));
// ________________________

// mudando o value do input
console.log($('#input').val('Arroz'));

// mudando o valor do atributo
console.log($('#input').attr('name', 'Item de compra'));

// inserindo attr em todos os elementos li
console.log($('li').attr('name', function (i) {
  return 'Item' + (i + 1)
}));
// ________________________

// alterando o valor de um attr do input
$('#input').attr('maxlength', 5).attr('type', 'password')


