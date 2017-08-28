class _UpLoads {
	constructor(that){
		this.settings={
			readFile:null,
			btn:null
		}
		this.arr = [];
		
	}
	init(opt){
		let _this = this;
		$.extend(this.settings,opt);
		if(this.settings.readFile){
			this.settings.readFile.change(function(ev){
				_this.addPic(ev.target.files[0]);
				ev.target.value = '';
			})	
		}
		if(this.settings.btn){
			this.settings.btn.click(function(){
				_this.send();
			})
		}
	}
	addPic(data){
		if(!this.arr.some(e=>e.name == data.name)){
			this.arr.push(data)
		}
	}
	send(){
		this.arr.forEach(e=>{
			let formData = new FormData;
			formData.append('file',e);
			$.ajax({
				url:'php/post_file.php',
				method:'post',
				data:formData,
				processData:false,
				contentType:false,
				success:function(){
					console.log(111)
				}
			})
		})
	}
}


$.fn.extend({
	uploads:function(opt){
		let _uploads = new _UpLoads(this);
		_uploads.init(opt);
		return this;
	}
})
