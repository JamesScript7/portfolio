'use strict';

(function() {
  // Parallax effect
  var velocity = 0.4;
  function update() {
    var pos = $(window).scrollTop();

    $('#container').each(function() {
      var $element = $(this);
      // var height = $element.height();
      $(this).css('background-position', '0% ' + Math.round((-pos) * velocity) + 'px');
    });
  };

  $(window).bind('scroll', update);

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

})();
