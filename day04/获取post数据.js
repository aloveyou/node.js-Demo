const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const server = http.createServer(function(req,res){

    const {pathname} = url.parse(req.url,true)
    if(pathname==='/'){
        fs.readFile('./demo.html',function(err,data){
            if(err)return
            res.end(data);
        })
    }else if(pathname==='/nicray'){
        console.log('表单数据接受成功')
        
        var str = "";
        req.on('data',function(chunk){
            str += chunk;
        })
        req.on('end',function(){
            console.log(qs.parse(str));
            res.setHeader('content-type','text/html;charset=utf-8');
            res.end('数据响应完毕')
        })
    }else{
        res.end('404')
    }
})

server.listen(3000,()=>{
    console.log('3000端口启用')
})

