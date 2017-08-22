const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
		
		let moUrl = req.url=='/'?'/index.html':req.url;
		
		let url = 'www'+req.url;
		
		if(/(\.html$)|(\.js$)/.test(req.url)){
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
