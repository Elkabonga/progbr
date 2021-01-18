var d = new Date()

console.log(d)

function JSClock() {
  var tempo = new Date();
  var hora = tempo.getHours();
  var minuto = tempo.getMinutes();
  var segundo = tempo.getSeconds();
  var temp = "" + ((hora > 12) ? hora - 12 : hora);
  if (hora == 0)
    temp = "12";
  temp += ((minuto < 10) ? ":0" : ":") + minuto;
  temp += ((segundo < 10) ? ":0" : ":") + segundo;
  temp += (hora >= 12) ? " P.M." : " A.M.";
  return temp;
}

console.log(JSClock());

var hoje = new Date();
var fimAno = new Date(1995, 11, 31, 23, 59, 59, 999); // Seta dia e mês
fimAno.setFullYear(hoje.getFullYear()); // Seta o ano para esse ano
var msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
var diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia;
var diasRestantes = Math.round(diasRestantes); //retorna os dias restantes no ano

console.log(diasRestantes);