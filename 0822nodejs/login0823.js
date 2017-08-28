const http = require('http');
const fs = require('fs');
const arr = [
	{username:'葡萄',password:123},
	{username:'鸭梨',password:456},
	{username:'西瓜',password:321}
]

http.createServer((req,res)=>{
	if(!/favicon.ico/.test(req.url)){
		let theUrl = req.url==='/'?'/index.html':req.url;
		let reqUrl = 'www'+theUrl;
		if(/\/user/.test(reqUrl)){
			let arrData = req.url.split('?')[1];
			let arrData2 = arrData.split('&');
			let json = {};
			let resObj = {code:1};
			
			arrData2.forEach(function(e){
				let item = e.split('=');
				if(item[0]=='username'){
					json[item[0]] = decodeURI(item[1]);
				}else{
					json[item[0]] = item[1];
				}
			})
			
			if(json.act){
				if(json.act==='add'){
					if(!arr.find(e=>e.username==json.username)){
						arr.push({username:json.username,password:json.password});
						
						resObj.code = 0;
						resObj.msg = '欢迎你，新用户'
					}else{
						resObj.msg = '该用户已存在'
					}
				}else if(json.act==='login'){
					if(arr.find(e=>e.username==json.username)){
						arr.forEach(e=>{
							if(e.username == json.username){
								if(e.password == json.password){
									resObj.msg = '欢迎回来';
									resObj.code = 5
									
								}else{
									console.log(e);
									console.log(json.password)
									resObj.msg = '密码错误';
									resObj.code = 4
								}
							}
						})
					}else{
						resObj.mst = '用户名不存在';
						resObj.code = 3;
					}

				}
			}else{
				resObj.msg == '参数错误';
				resObj.code= 2;
			}

			res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
			res.write(JSON.stringify(resObj));
			res.end();
			

		}else{  //走静态页面
			console.log()
			fs.readFile(reqUrl,(error,data)=>{
				res.write(data);
				res.end();
			})
		}
	}
	
	
}).listen(99)

