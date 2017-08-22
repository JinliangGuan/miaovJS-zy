const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

        console.log(req.url)
        switch (req.url){
            case '/1_nodejs.html' :
                fs.readFile('1_nodejs.html', (error, data) => {
                        res.write(data);
                        res.end();
                })
            break;
            case '/user' :
                res.write('{"name":"guan"}');
                res.end();
                
            break;
            default:
                res.write('404');
                res.end();
        }
})

server.listen(88)
