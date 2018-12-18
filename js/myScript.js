$(document).ready(function () {
	var flag = 1;
	$(".navbar-toggle").click(function () {
		if (flag == 1) {
            $(".navbar-default").removeClass('gradientNavbar');
            $(".navbar-default").addClass('gradientNavbarlight');
			$(".navbar-default").attr('style', 'background-color: rgb(113, 69, 144) !important;').animate({},500);
			flag = 0;
		}
		else{
			$(".navbar-default").removeAttr('style').animate({},500);
            $(".navbar-default").removeClass('gradientNavbarlight');
            $(".navbar-default").addClass('gradientNavbar');
			flag = 1;
		}
	});
	var locate = $(location).attr('pathname');
	if (locate == "/E:/Programming/internet%20programming%20project/template%20startup%20team/template/about.html") {
		$(".navbar-default").attr('style', 'background-color: rgba(172, 131, 195, 0.85) !important;');
		$(".gradientNavbar").attr('style', 'background: rgba(94, 44, 129, 0.88) !important');
	}
	else{
		//$(".navbar-default").attr('style', 'background: linear-gradient(149.8deg, rgba(94, 44, 129, 0.88) 10.5em, rgba(228, 228, 228, 0.35) 0%) !important;');
	}
});