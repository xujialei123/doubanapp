


$("body").on("tap",'.film-item',function  () {
	let id = $(this).data('id')
	goToDetail(id)
})

function goToDetail(id){
	
	
	mui.openWindow({
		url:'detail.html',
		id:'detail.html',
		styles:{
	      top:'0',//新页面顶部位置
	      bottom:'0',//新页面底部位置
	    },
		extras:{
			filmid:id
		}
	})
	
	
}
