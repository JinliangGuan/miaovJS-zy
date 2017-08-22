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
			let arrDate2 = arrDate2.split('&');
			let reqObj = {}
			let resObj = {code:1};
		
			arrData2.forEach(e=>{
				let reqItem = e.split('=');
				reqObj[reqItem[0]] = reqItem[1]
			})
			
			arrDate2.forEach((e,i)=>{
				if(e.split('=')[0]=='act'){
					if(e.split('=')[1] == 'add'){	
						if(arr.find(e=>e.username==reUserName)){
							res.write('该用户已经存在');
							res.end();
						}else{
							
						}
					}else if(e.split('=')[1] == 'login'){
						
						
					}
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
				
			}
			
			
			res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
			res.write(JSON.stringify(resObj));
			res.end();
			
			
		}else{
			fs.readFile(url, (error, data) => {
                res.write(data);
                res.end();
        	})
		}
 	}
})

server.listen(88)
