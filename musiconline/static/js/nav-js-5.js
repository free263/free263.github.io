/* JavaScript code should be executed in "strict mode" */
"use strict";

/*  Nvabar on clicking items */
$(window).scroll(function () {
	"use strict";
	var scroll = $(window).scrollTop();
	if (scroll > 60) {
		$(".navbar").addClass("fixed-top-scroll");
	} else {
		$(".navbar").removeClass("fixed-top-scroll");
	}
});

/*  Smooth Scrolling on clicking nav items */
$(".navbar-nav li a[href^='#']").on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 1000);
});