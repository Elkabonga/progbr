// setTimeout(() => {
//   $('h2').addClass('bg-blue')
// }, 1000)

// setTimeout(() => {
//   $('h2').removeClass('bg-blue')
// }, 2000)

// setInterval(() => {
//   $('h2').toggleClass('bg-green')
// }, 200)
//_____________________

$('h2').toggleClass('bg-green')

console.log($('h2').css({
  'background-color': 'blue',
  'font-size': '50px',
  'color':'white',
  'padding':'10px'
}));
