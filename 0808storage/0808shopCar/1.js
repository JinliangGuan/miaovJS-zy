let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let list1 = Array.from(ul1.children);
let result = []; //存放点击数据的


if(localStorage.getItem('mmm')){
	result = JSON.parse(localStorage.getItem('mmm'));
	addHtml(result);		
}


//购物车单击删除物品
ul2.onclick = function(ev){
	var theLi = ev.target;
	var idx = result.indexOf(theLi.innerText);
	result.splice(idx,1);
	//addHtml(result);
	ul2.removeChild(theLi)
	
	//添加数据到本地
	localStorage.setItem('mmm',JSON.stringify(result));
	console.log(result)
}

//监听渲染
window.addEventListener('storage',function(){
	
	//如果没有走别的
	if(localStorage.getItem('mmm')){
		result = JSON.parse(localStorage.getItem('mmm'));
		addHtml(result);
	}
	
});

list1.forEach((e,i)=>{
	e.onclick = function(){
		if(!result.includes(e.innerHTML)){
			result.push(e.innerHTML);
			addHtml(result);
			
			//添加数据到本地
			localStorage.setItem('mmm',JSON.stringify(result));
		}
	}
});

function addHtml(arr){
	let html = '';
	arr.forEach(e=>{
		html += `<li>${e}</li>`;
	});
	
	ul2.innerHTML = html;
}




