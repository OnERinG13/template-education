$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.footer').css('opacity','1');
		}else{
    $('.footer').css({'opacity':0});
  }
	});
});
