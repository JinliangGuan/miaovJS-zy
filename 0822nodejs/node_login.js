const http = require('http');
const fs = require('fs');
const arr = [
	{username:'葡萄',password:123},
	{username:'鸭梨',password:456},
	{username:'西瓜',password:321},
]


const server = http.createServer((req, res) => {
		
		let moUrl = req.url=='/'?'/index.html':req.url;
		
		let url = 'www'+req.url;
		
		if(/(\.html$)|(\.js$)/.test(req.url)){
			let arrData = req.url.split('?')[1];
			let arrDate2 = arrDate2.split('&');
			let reUserName = '';
			let rePassWord = '';
			let code = null;
			
			arrDate2.forEach((e,i)=>{
				if(e.split('=')[0]=='username'){
					reUserName = decodeURI(e.split('=')[1]);	
				}
				if(e.split('=')[0]=='password'){
					rePassWord = e.split('=')[1];	
				}
			})
			
			arrDate2.forEach((e,i)=>{
				if(e.split('=')[0]=='act'){
					if(e.split('=')[1] == 'add'){	
						if(arr.find(e=>e.username==reUserName)){
							res.write('该名字已经被注册');
							res.end();
						}else{
							
						}
					}else if(e.split('=')[1] == 'login'){
						
						
					}
				}
			})
			
			
			
			res.write("'name':'mahui'");
			res.end();
			
		}else{
			fs.readFile(url, (error, data) => {
				
                res.write(data);
                res.end();
        	})
		}
 
})

server.listen(88)
