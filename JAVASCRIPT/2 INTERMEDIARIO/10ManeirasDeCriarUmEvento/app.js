function f1(e) {
  console.log('teste f1');
  console.log(this);
  console.log(e);
}

function f2(e) {
  console.log('teste f2');
  console.log(this);
  console.log(e);
  console.log(e.target);
}

window.onload = function () {
  let h2 = document.getElementById('f2')
  h2.addEventListener('click', f2)
}