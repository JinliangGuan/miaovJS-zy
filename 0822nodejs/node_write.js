const http = require('http');
const fs = require('fs');


fs.writeFile('2.txt','我是呵呵2',(error)=>{
        if(error){
                console.log('创建失败')
        }
        console.log('ok')
})
