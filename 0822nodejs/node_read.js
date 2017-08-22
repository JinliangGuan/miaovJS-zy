const http = require('http');
const fs = require('fs');


fs.readFile('1.txt',(error,data)=>{
        if(error){
                console.log('读取失败')
        }
        console.log('ok')
})
