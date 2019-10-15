const express = require('express');

const app = express()

app.get('/nicray/:id',function(req,res){
    //获取get数据
    let {id} = req.params
    console.log(id) //  获取id
    res.send(req.params)
})


app.use(express.static('public'))

app.listen(3001,()=>{
    console.log('3000端口成功运行');
})

