let usuarios = ['Tiago', 'Igor', 'José']

function inserirUsuario(nome, callback) {
  setTimeout(() => {
    usuarios.push(nome)
    callback()
  }, 1000)
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuario('Carlos', listarUsuarios)
