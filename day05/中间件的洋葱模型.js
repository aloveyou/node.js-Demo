const express = require('express');

const app = express()

app.get('/',function(req,res,next){
    //获取get数据
    console.log(1)
    next() //触发下一个中间件函数
    console.log(2)
})

app.get('/',function(req,res,next){
    console.log(3)
    next()
    console.log(4)
})

app.use(express.static('public'))

app.listen(3001,()=>{
    console.log('3001端口成功运行');
})

