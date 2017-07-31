const path = require('path');
module.exports  = {
     entry:{
     	wpoktest:'./2.js'
     },
     output:{
          path:path.resolve(__dirname,'build'),
          filename:'[name].js'
     },
     module:{
          rules:[
               {
                   test:/\.js$/,
                    use:"babel-loader"
               },
               {
               		test:/\.css$/,
               		use:[
               			{loader:"style-loader"},
               			{loader:"css-loader"}
               		]
               }
               
          	]
     }
}
