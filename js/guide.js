$(document).ready(function(){
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top > 300){
			$('.go_top').fadeIn();
		}else{
			$('.go_top').fadeOut();
		}
	})
	$('.go_top').on('click',function(){
		rolling(0);
	})
})
function rolling(height){
	$("html,body").animate({scrollTop:height}, 500);
}