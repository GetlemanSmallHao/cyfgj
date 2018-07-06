$(document).ready(function(){
	/*顶部返回上一页*/
	$('.back').on('click',function(){
		history.go(-1);
	});
	/*点击切换页面*/
	$('.tab_title li').on('click',function(){
		$(this).css('border-bottom','1px solid #2868b3').siblings().css('border-bottom','none');
		$('.tab_content').css('display','none');
		let index = $(this).index();
		$('.tab_content').eq(index).fadeIn('slow');
	});
})