//该模块专门用来搭建服务 供客户端请求以及响应
const http = require('http');

/**
 * 创建服务 当客户端向服务器发起请求 触发回调函数
 * req请求体 res响应体
 * 
 **/ 
var server = http.createServer(function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('这是服务端给客户端的响应')
})
server.listen(3000,function(){
    console.log('我是3000端口')
})


