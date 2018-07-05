window.onload = function(){
	document.getElementsByClassName('back')[0].onclick = function(){
		history.go(-1);
	}
	let list = document.getElementsByTagName('li');
	list[0].onclick = function(){
		switch_tab('1px solid #2868b3','none','block','none');
	}
	list[1].onclick = function(){
		switch_tab('none','1px solid #2868b3','none','block');
	}
}
function switch_tab(border_a,border_b,block_a,block_b){
	document.getElementsByTagName('li')[0].getElementsByTagName('p')[0].style.borderBottom = border_a;
	document.getElementsByTagName('li')[1].getElementsByTagName('p')[0].style.borderBottom = border_b;
	document.getElementsByClassName('draw_detail_one')[0].style.display = block_a;
	document.getElementsByClassName('draw_detail_two')[0].style.display = block_b;
}