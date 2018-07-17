$(document).ready(function(){
	$('.item_select .content').on('click',function(){
		$('.item_select img').attr('src','../img/slide_down.png');
		$('.select').slideDown();
	})
	$('.select li').on('click',function(){
		$('.item_select img').attr('src','../img/slide_right.png');
		$('.select').slideUp();
		$('.content').text($(this).text());
	})
});