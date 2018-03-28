window.onload = function() {
  var
    innerHeight = window.innerHeight,
    wrapper = document.getElementById('wrapper'),
    arrow = document.getElementById('arrow'),
    forest = document.getElementById('forest'),
    // Cat animation elements:
    mySkills = document.getElementById('mySkills').offsetTop,
    catPizza = document.getElementById('flyingCatPizza'),
    scrollPosition;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    arrow.remove();
    forest.remove();
  }
  // Event Listeners:
  window.addEventListener('scroll', animationCentral);
  // Handles impact page, arrow, forest, and cat animation set/reset.
  function animationCentral() {
    scrollPosition = window.pageYOffset;
    // Evaluate when scrolled down 1/9 of window height
    // else restore impact page to original, hide forest, and activate arrow jump animation.
    if (scrollPosition > (innerHeight / 9)) {
      forest.style.display = 'inline-block';
      // Fades out the impact page to black and removes arrow animation
      // when scrolled down 1/8 of the inner window height
      // else restore it back to original.
      if (scrollPosition > (innerHeight / 8)) {
        wrapper.style.animation = 'fadeToBlack 1.5s forwards'
        arrow.style.animation = 'none';
      } else {
        wrapper.style.animation = 'none';
      }
    } else {
      wrapper.style.animation = 'none';
      arrow.style.animation = 'jump 2.5s 1.5s ease-in-out';
      forest.style.display = 'none';
    }
    // Activate cat animation when the bottom of impact page hits the top of the window
    // and stop when my skills hit top of the window.
    (scrollPosition > innerHeight && scrollPosition < mySkills)
      ? catPizza.style.display = 'block'
      : catPizza.style.display = 'none';
  }
  // ======================
  // ==  FUTURE UPGRADE  ==
  // ==    P5.js GAME    ==
  // ======================
  // function setup() {
  //   createCanvas(800,400);
  // }
  // function draw() {
  //   background(255,255,255);
  // }
}
