
/**
 * Make navbar active 
 */

$("body").waypoint(function() {
    $(".navbar").toggleClass("navbar__initial");
    return false;
}, { offset: "-20px" });

/**
 * Smooth scroll to anchor
 */

$(function() {
  $('a[href*=#]:not([href=#])').on('click',function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});