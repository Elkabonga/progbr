let usuarios = ['Tiago', 'Igor', 'José']

function inserirUsuario(nome) {

  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome)
      let error = false

      if (!error) {
        resolve()
      } else {
        reject({ msg: 'erro aqui!' })
      }
    }, 1000)
  })
  return promise
}

function listarUsuarios() {
  console.log(usuarios);
}

async function executar(){
  await inserirUsuario('Ana')
  listarUsuarios()
}

executar()