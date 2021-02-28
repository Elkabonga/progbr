let selectedSiblingsNull = $('#div3').siblings()
console.log(selectedSiblingsNull);

let selectedSiblings = $('#div3').siblings('#div4')
console.log(selectedSiblings);
//_____________________________

let selectedNextAllNull = $('#div3').nextAll()
console.log(selectedNextAllNull);

let selectedNextAll = $('#div3').nextAll('#div4')
console.log(selectedNextAll);
//_____________________________

let selectedNextNull = $('#div3').next()
console.log(selectedNextNull);

let selectedNext = $('#div3').next('#div4')
console.log(selectedNext);
//_____________________________

let selectedPrevAllNull = $('#div3').prevAll()
console.log(selectedPrevAllNull);

let selectedPrevAll = $('#div3').prevAll('#div2')
console.log(selectedPrevAll);
//_____________________________

let selectedNextUntil = $('#div1').nextUntil('#div5')
console.log(selectedNextUntil);
//_____________________________