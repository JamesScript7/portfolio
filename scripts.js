'use strict';

(function() {

  // Parallax effect
  var velocity = 0.1;
  function update() {
    var pos = $(window).scrollTop();

    $('#container').each(function() {
      var $element = $(this);
      var height = $element.height() - 1585;
      console.log(height);
      $(this).css('background-position', '10% ' + Math.round((height - pos) * velocity) + 'px');
    });
  };

  $(window).bind('scroll', update);

  // etc.


})();
