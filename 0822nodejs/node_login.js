const http = require('http');
const fs = require('fs');
const arr = [
	{username:'葡萄',password:123},
	{username:'鸭梨',password:456},
	{username:'西瓜',password:321},
]


const server = http.createServer((req, res) => {
	if(!/favicon.ico/.test(req.url)){
		let theUrl = req.url=='/'?'/index.html':req.url;
		let url = 'www'+theUrl;
		if(/user/.test(req.url)){
			let arrData = req.url.split('?')[1];
			
			let arrData2 = arrData.split('&');
			
			let reqObj = {}
			let resObj = {code:1};
			
			arrData2.forEach(e=>{
				let reqItem = e.split('=');
				if(reqItem[0] === 'username'){
					reqObj[reqItem[0]] = decodeURI(reqItem[1]);	
				}else{
					reqObj[reqItem[0]] = reqItem[1];
				}
			})
			

			if(reqObj.act == 'add'){
				if(arr.find(e=>e.username == reqObj.username)){
					resObj.msg = "该用户已经注册"
				}else{
					arr.push({username:reqObj.username,password:reqObj.password});
					resObj.msg = "欢迎你，新用户";
					resObj.code = 0;
				}
			}else if(reqObj.act == 'login'){	
				console.log('login')
				if(arr.find(e=>e.username == reqObj.username)){
					arr.forEach(e=>{
						if(e.username == reqObj.username){
							if(e.password == reqObj.password){
								resObj.msg = '欢迎回来';
								resObj.code = 0;
							}else{
								resObj.msg = '密码错误，请检查用户名或密码';
							}
						}
					})
				}else{
					resObj.msg = '没有该用户!请检查'
				}
			}
			
			
			res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
			res.write(JSON.stringify(resObj));
			res.end();
			
			
		}else{
			//走静态文件
			fs.readFile(url, (error, data) => {
                res.write(data);
                res.end();
        	})
		}
 	}
})

server.listen(90)
