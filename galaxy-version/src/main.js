// function setup() {
//   createCanvas(800,400);
// }
// function draw() {
//   background(255,255,255);
// }
window.onload = function() {
  var forest = document.getElementById('forest');
  var wrapper = document.getElementById('wrapper');
  var catPizza = document.getElementById('flying-cat-pizza');
  var innerHeight = window.innerHeight;
  // console.log(innerHeight);

  window.addEventListener('scroll', function(e) {
    // console.log(window.scrollY);
    if (window.scrollY > (innerHeight / 6)) {
      forest.style.display = 'inline-block';
      if (window.scrollY > (innerHeight / 4)) {
        wrapper.style.animation = 'fadeToBlack 1.5s forwards'
      } else {
        wrapper.style.animation = 'none';
      }
    } else {
      wrapper.style.animation = 'none';
      forest.style.display = 'none';
    }

    // if (catPizza.scrollIntoView()) {
    //   console.log('start the animation!')
    // }
  });









}
