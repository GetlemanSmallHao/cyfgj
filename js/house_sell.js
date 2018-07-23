$(function() {
	$("[limit]").limit();
	$('.house-tt').hide();
	$('.house-tt').eq(0).show();
})
window.onload=window.onresize=function(){
    var html=document.documentElement;
    var width=html.clientWidth;
    html.style.fontSize=100*(width/375)+'px';
};
//字符串截取封装函数  注:调用方法:$('.aa').tooltip();在.aa自定义类名limit="10"
jQuery.fn.limit = function() {
	var self = $("[limit]");
	self.each(function() {
		var objString = $(this).text();
		var objLength = $(this).text().length;
		var num = $(this).attr("limit");
		if(objLength > num) {
			$(this).attr("title", objString);
			objString = $(this).text(objString.substring(0, num) + "...");
		}
	})
}
