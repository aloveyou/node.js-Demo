const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.post('/nicray',function(req,res){
    // // res.end('nicray')
    // res.send({name:'nicray'})
    console.log(req.body)
    res.send([1,2,3])
})

app.use(express.static('public'))

app.listen(3001,()=>{
    console.log('3001端口成功运行');
})

