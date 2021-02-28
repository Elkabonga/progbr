let selectDiv = $('div')
console.log(selectDiv);

let selectDivChildren = $('div').children()
console.log(selectDivChildren);

let selectChildren = $('#container2').children()
console.log(selectChildren);

let selectFilter = $('#container2').children().filter('.div2')
console.log(selectFilter);

let selectNot = $('#container2').children().not('#div8')
console.log(selectNot);

let selectFirst = $('#container2').children().first()
console.log(selectFirst);

let selectLast = $('#container2').children().last()
console.log(selectLast);

let selectEq = $('#container2').children().eq(3)
console.log(selectEq);
