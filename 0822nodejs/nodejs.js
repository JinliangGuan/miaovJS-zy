const http = require('http');
const fs = require('fs');


const server = http.createServer((request,response)=>{
        console.log(123);
        response.write('hehe');
        response.end()
})

server.listen(88);
