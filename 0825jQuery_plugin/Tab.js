class Tab {
	constructor(that){
		this.settings = {
			btns:['新闻','体育','游戏','音乐'],
			contents:[
						[
							{
								id:0,
								content:'台风又来了'	
							},
							{
								id:1,
								content:'沙特国外花1亿美元度假'	
							},
							{
								id:2,
								content:'飓风袭击美国，已经造成严重灾害'
							},
							{
								id:3,
								content:'英国推99英镑豪华冰激凌 用金箔打造'
							},
						],
						'霍顿输了',
						'王者荣耀——橘右京免费兑换?',
						[
							{id:0,content:'演员'},
							{id:1,content:'绅士'},
							{id:2,content:'丑八怪'}
						]
					]
			
		},
		this.that = that
	}
	init(opt){
//		$.extent(this.settings,opt);
		this.createBtns();
		this.createContents();
		this.btnClick();
	}
	createBtns(){
		$.each(this.settings.btns,(i,e)=>{
			let btn = $(`<button class="${i==0?'active':''}">${e}</button>`);
			this.that.append(btn)
		})
	}
	btnClick(){
		var _this = this;
		$('#app').find('button').click(function(){
			_this.bantab($(this).index())
		})
	}
	bantab(index){
		$('#app').find('button').eq(index).addClass('active').siblings().removeClass('active');
		$('#app').find('ul').removeClass('conHide').removeClass('conShow');
		$('#app').find('ul').addClass('conHide');
		$('#app').find('ul').eq(index).removeClass('conHide').addClass('conShow');
	}
	createContents(){
		$.each(this.settings.contents,(i,item)=>{
			let conTxt = $(`<ul id="con" class="${i==0?'conShow':'conHide'}"></ul>`)
			if(item.push){
				$.each(item,(idx,e)=>{
					let li = $(`<li>${e.content}</li>`);
					conTxt.append(li)	
				})
			}else{
				conTxt.html($(`<li>${item}</li>`))
			}
			this.that.append(conTxt)
		})
	}
}

$.fn.extend({
	tabs:function(opt){
		let tab = new Tab(this);
		tab.init(opt);
		return this;
	}
})
