function speakGeneric() {
  console.log(this.sound);
}

let dog = {
  sound: 'au au',
  speak: speakGeneric
}

let cat = {
  sound: 'miau',
  speak: speakGeneric
}

dog.speak()
cat.speak()

// se chamar a função abaixo vai dar undefined, pq o this perdeu sua referencia
// speakGeneric()

// agora abaixo podemos setar o this utilizando o bind
let bindFunctionDog = speakGeneric.bind(dog)
let bindFunctionCat = speakGeneric.bind(cat)

bindFunctionDog()
bindFunctionCat()