// se comentarmos a variavel abaixo
// o codigo mostrara o erro porem continua
// let nome = 'tiago'

try {
  console.log(nome);
} catch (err) {
  console.log('houve um erro', err);
} finally {
  console.log('boa noite');
}
