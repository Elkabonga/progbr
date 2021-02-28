let lista1 = $('#lista1')

// append inseri o elemento no fim da lista
lista1.append('<li>Teste1</li>')

// prepend inseri o elemento no inicio da lista
lista1.prepend('<li>Teste2</li>')

// after inseri o elemento depois do termino da lista
lista1.after('<li>Teste3</li>')

// prepend inseri o elemento antes do inicio da lista
lista1.before('<li>Teste4</li>')

let rect = $('.rect')

rect.append('texto append')
rect.prepend('texto prepend')
rect.before('texto before')
rect.after('texto after')