// function setup() {
//   createCanvas(800,400);
// }
// function draw() {
//   background(255,255,255);
// }
window.onload = function() {
  var forest = document.getElementById('forest');
  var innerHeight = window.innerHeight;
  console.log(innerHeight);

  window.addEventListener('scroll', function(e) {
    console.log(window.scrollY);
    if (window.scrollY > innerHeight / 3) {
      forest.style.display = 'inline-block';
    } else {
      forest.style.display = 'none';
    }
  });












}
