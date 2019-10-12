//该模块专门用来搭建服务 供客户端请求以及响应
const http = require('http');
const fs = require('fs');
const url = require('url')//用来处理地址栏信息
/**
 * https://www.baidu.com:8080   /p/a/t/h ?  query=string #hash
 * 协议         域名      端口号  pathname      search      hash值
 * 
 */
var server = http.createServer(function(req,res){
    // console.log(req.url);
    const {pathname,query} = url.parse(req.url);
    console.log(pathname);
    if(pathname==='/demo.html'){
        fs.readFile('./demo.html',function(err,data){
            if(err)return
            res.end(data);
        })
    }else if(pathname==='/demo.css'){
        res.setHeader('content-type','text/css');
        fs.readFile('./demo.css',function(err,data){
            if(err)return
            res.end(data);
        })
    }else if(pathname==='/7.jpg'){
        fs.readFile('./7.jpg',function(err,data){
            if(err)return
            res.end(data);
        })
    }else if(pathname==='/1.js'){
        fs.readFile('./1.js',function(err,data){
            if(err)return
            res.end(data);
        })
    }else{
        res.setHeader('content-type','text/html;charset=utf-8');
        res.end('404页面');
    }
   
})
server.listen(3000,function(){
    console.log('我是3000端口')
})


