'use strict';

(function() {
  // Background Image parallax effect
  var velocity = 0.2;
  function update() {
    var pos = $(window).scrollTop();

    $('#container').each(function() {
      var $element = $(this);
      // var height = $element.height();
      $(this).css('background-position', '0% ' + Math.round((-pos) * velocity) + 'px');
    });
  };

  $(window).bind('scroll', update);

  // Navigation bar hide and show effect

  (function($) {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $('#nav').fadeIn(500);
        } else {
          $('#nav').fadeOut(800);
        }
      });
    });
  })(jQuery);

  // Smooth Scrolling on anchor tags

  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  });

})();
