//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar-nav a').on('bind','click', function(event) {
        var $anchor = $(this);
        $('html, body').on(stop).animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/* Preloader */

$(window).on('load',function() {
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
});

//sticky header on scroll
$(window).on('load',function() {
    $(".sticky").sticky({topSpacing: 0});
});


$(window).on('scroll',function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
}); 

$('.back-to-top').on('click',function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});
