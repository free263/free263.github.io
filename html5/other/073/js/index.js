$(function() {
	var num = 0;
	$('.pc_first_page_slide, #fullpage').height($(window).height());
	function fn() {
		num++;
		if (num === $(".slide_show>ul>li").length) {
			num = 0;
		}
		$(".slide_show li").eq(num).show().find('img').addClass('activeImg');
		$(".slide_show li").eq(num).siblings("li").find('img').removeClass('activeImg')
		$(".slide_show li").eq(num - 1).addClass('current').siblings("li").removeClass('current');
		
		setTimeout(function() {
			$(".slide_show li").eq(num - 1).hide()
		}, 1000)
	}
	setInterval(fn,2500);
})