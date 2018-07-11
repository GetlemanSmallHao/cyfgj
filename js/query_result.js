$(document).ready(function(){
	p_height();
})
//动态监听右边每个p标签的高度，并且赋值给左边的p标签
function p_height(){
	let count = $('.right p').length;
	for (let i = 0; i < count; i++) {
		let height = $('.right p').eq(i).height();
		$('.left p').eq(i).height(height);
	};
}