let pi = Math.PI
console.log(pi);

let n = Math.E
console.log(n);

let raizQuadrada = Math.sqrt(16)
console.log(raizQuadrada);

let potencia = Math.pow(2, 3)
console.log(potencia);

// numero aleatório de 0.00 á 1.00
let NumeroRandom = Math.random()
console.log(NumeroRandom);

// com isso podemos trabalhar para obter qualquer numero aleatório
// como por exemplo abaixo de 0 á 10 arredondando com o Round
let NumeroRandomZeroDez = Math.round(Math.random() * 10)
console.log(NumeroRandomZeroDez);

// enquanto o round arredonda entre .49 pra baixo e .50 para cima
// o floor arredonda qualquer acréscimo para baixo
let NumeroRandomZeroDezFloor = Math.floor(Math.random() * 10)
console.log(NumeroRandomZeroDezFloor);

// o ceil arredonda qualquer acréscimo para cima = teto
let NumeroRandomZeroDezCeil = Math.ceil(Math.random() * 10)
console.log(NumeroRandomZeroDezCeil);

// __________________________________

// Method                 Description
// abs(x)	                Returns the absolute value of x
// acos(x)	              Returns the arccosine of x, in radians
// asin(x)	              Returns the arcsine of x, in radians
// atan(x)	              Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	          Returns the arctangent of the quotient of its arguments
// ceil(x)	              Returns the value of x rounded up to its nearest integer
// cos(x)	                Returns the cosine of x (x is in radians)
// exp(x)	                Returns the value of Ex
// floor(x)	              Returns the value of x rounded down to its nearest integer
// log(x)	                Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	  Returns the number with the highest value
// min(x, y, z, ..., n)	  Returns the number with the lowest value
// pow(x, y)	            Returns the value of x to the power of y
// random()	              Returns a random number between 0 and 1
// round(x)	              Returns the value of x rounded to its nearest integer
// sin(x)	                Returns the sine of x (x is in radians)
// sqrt(x)	              Returns the square root of x
// tan(x)	                Returns the tangent of an angle