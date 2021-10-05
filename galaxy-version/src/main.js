window.addEventListener("DOMContentLoaded", function() {
    var innerHeight = window.innerHeight;
    var forest = document.getElementById('forest');
    var wrapper = document.getElementById('wrapper');

    // Cat Animation Elements
    var projectPics = document.getElementById('projectPics').offsetTop;
    var flyingCatPizza = document.getElementById('flyingCatPizza');

    if (isMobile()) {
        forest.remove();
    }

    // Event Listeners
    window.addEventListener('scroll', animationCentral);

    // Functions
    function isMobile() { return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Mobile|Silk|Opera Mini/i.test(navigator.userAgent)); }

    // Handles impact page, forest, and cat animation set/reset.
    function animationCentral() {
        var scrollPosition = window.pageYOffset;

        // Evaluate when scrolled down 1/9 of window height
        // else restore impact page to original and hide forest
        if (scrollPosition > (innerHeight / 9)) {
            forest.style.display = 'inline-block';
            // Fades out the impact page to black
            // when scrolled down 1/8 of the inner window height
            // else restore it back to original.
            if (scrollPosition > (innerHeight / 8)) {
                wrapper.style.animation = 'fadeToBlack 1.5s forwards'
            } else {
                wrapper.style.animation = 'none';
            }
        } else {
            wrapper.style.animation = 'none';
            forest.style.display = 'none';
        }

        // Activate cat animation when the bottom of impact page hits the top of the window
        // and stop when My Projects hit top of the window.
        (scrollPosition > innerHeight && scrollPosition < projectPics)
            ? flyingCatPizza.style.display = 'block'
            : flyingCatPizza.style.display = 'none';
    }
});
