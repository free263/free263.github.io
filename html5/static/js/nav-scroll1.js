/* This is script for top navbar and smooth scroll */
/* Animated function begin */
$(document).ready(function() {
    $(".animated").css("animation-duration", "2s");
    $("body").scrollspy({
        target: "#navbar"
    });
	/* Smooth scroll click function */
    $('a[href^="#"]').on("click", function(f) {
        f.preventDefault();
        var d = this.hash;
        var c = $(d);
        $("html, body").stop().animate({
            scrollTop: c.offset().top
        }, 900, "swing");
        $(".navbar-collapse.collapse").removeClass("in")
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".site-navbar").addClass("sticky")
        } else {
            $(".site-navbar").removeClass("sticky")
        }
    });
});
/* Animated function end */