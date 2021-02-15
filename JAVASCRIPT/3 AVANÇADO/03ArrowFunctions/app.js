// Function declarations
function dobro1(x) {
  console.log(2 * x);
}

dobro1(2)

//Function expressions
var dobro2 = function (x) {
  console.log(2 * x);
}

dobro2(4)

//Arrow functions
var dobro3 = x => 2 * x

console.log(dobro3(6))