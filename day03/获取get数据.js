//该模块专门用来搭建服务 供客户端请求以及响应
const http = require('http');
const fs = require('fs');
const url = require('url')//用来处理地址栏信息

var server = http.createServer(function(req,res){
    // console.log(req.url);
    const {pathname,query} = url.parse(req.url,true);
    console.log(pathname,query);
    
})
server.listen(3000,function(){
    console.log('我是3000端口')
})


