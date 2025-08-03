$(function() {
  var animation = (function($) {
    const $frames = $('[data-anchor="dp"]');
    const framesLength = $frames.length - 1;
    let i = 0;
    let step = 1;
    $($frames[0]).addClass("active");
    setInterval(function() {
      if (i > framesLength) {
        step = -1;
        i = framesLength;
        $($frames[framesLength]).removeClass("active");
      } else if (i === 0) {
        step = 1;
      } else {
        $($frames[i]).toggleClass("active");
      }
      i += step;
    }, 1000 / 24);
  })($);
});