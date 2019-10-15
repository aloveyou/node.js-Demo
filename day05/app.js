const express = require('express');

const app = express()

app.get('/nicray',function(req,res){
    //获取get数据
    console.log(req.query)

})
app.post('/nicray',function(req,res){
    // res.end('nicray')
    // res.send({name:'nicray'})
    res.send([1,2,3])
})

app.use(express.static('public'))

app.listen(3000,()=>{
    console.log('3000端口成功运行');
})

