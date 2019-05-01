window.addEventListener("DOMContentLoaded", function() {
    var innerHeight = window.innerHeight;
    var arrow = document.getElementById('arrow');
    var forest = document.getElementById('forest');
    var wrapper = document.getElementById('wrapper');

    if (isMobile()) {
        arrow.remove();
        forest.remove();
    }

    // helper fn
    function isMobile() { return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Mobile|Silk|Opera Mini/i.test(navigator.userAgent)); }

    // TODO: Very very bad practice, not performant, update this to use requestanimationframe with ease-in-out formula
    function scrollTo() {
        var scrollHeight = document.getElementById('scrollAnchor').offsetTop - 125;
        var scrollDuration = 5000;
        var scrollStep = Math.PI / (scrollDuration / 15);
        var cosParameter = scrollHeight / 2;
        var scrollCount = 0;
        var scrollMargin;

        var scrollInterval = setInterval(function() {
            if (window.scrollY <= scrollHeight) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, ((window.pageYOffset + scrollMargin)));
            } else {
                clearInterval(scrollInterval);
            }
        }, 32);
    }

    // Event Listeners
    window.addEventListener('scroll', animationCentral);
    arrow.addEventListener('click', scrollTo);

    // Cat Animation Elements
    var projectPics = document.getElementById('projectPics').offsetTop; 
    var flyingCatPizza = document.getElementById('flyingCatPizza');
    var scrollPosition;

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
        // and stop when My Projects hit top of the window.
        (scrollPosition > innerHeight && scrollPosition < projectPics)
            ? flyingCatPizza.style.display = 'block'
            : flyingCatPizza.style.display = 'none';
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
});