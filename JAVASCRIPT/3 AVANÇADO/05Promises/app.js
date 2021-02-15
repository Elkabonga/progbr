let usuarios = ['Tiago', 'Igor', 'José']

function inserirUsuario(nome) {

  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome)
      //aqui o true força o erro no if
      let error = true

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

inserirUsuario('Carlos')
  .then(listarUsuarios)
  .catch((error) => {
    console.log(error.msg);
  })
