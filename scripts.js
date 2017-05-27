'use strict';

(function() {
  // Parallax effect
  var velocity = 0.2;
  function update() {
    var pos = $(window).scrollTop();

    $('#container').each(function() {
      var $element = $(this);
      // var height = $element.height();
      $(this).css('background-position', '0% ' + Math.round(((-0) - pos) * velocity) + 'px');
    });
  };

  $(window).bind('scroll', update);

  (function($) {
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
          $('#nav').fadeIn(500);
        } else {
          $('#nav').fadeOut(500);
        }
      });
    });
  })(jQuery);

})();
