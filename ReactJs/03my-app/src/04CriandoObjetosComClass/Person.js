class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log("Olá, tudo bom? Meu nome é: ", this.name,
      " e tenho: ",
      this.age,
      " anos.");
  }
}

module.exports = Person;
