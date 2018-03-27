window.onload = function() {
  var forest = document.getElementById('forest');
  var wrapper = document.getElementById('wrapper');
  var innerHeight = window.innerHeight;
  // console.log(innerHeight);
  window.addEventListener('scroll', function(e) {

    if (window.scrollY > (innerHeight / 9)) {
      if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        forest.style.display = 'inline-block';
      }
      if (window.scrollY > (innerHeight / 8)) {
        wrapper.style.animation = 'fadeToBlack 1.5s forwards'
      } else {
        wrapper.style.animation = 'none';
      }
    } else {
      wrapper.style.animation = 'none';
      forest.style.display = 'none';
    }
    // var mySkills = document.getElementById('mySkills').offsetTop;
    var projectPics = document.getElementById('projectPics').offsetTop;
    var catPizza = document.getElementById('flying-cat-pizza');
    // When bottom of impact page hits the top of the window
    if (window.scrollY >= innerHeight && window.scrollY <= projectPics) {
      // console.log('activate cat');
      catPizza.style.display = 'block';
    } else {
      // console.log('de-activate cat');
      catPizza.style.display = 'none';
    }
  });
}
// P5.js ZONE
// function setup() {
//   createCanvas(800,400);
// }
// function draw() {
//   background(255,255,255);
// }
