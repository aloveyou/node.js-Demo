//引入express包
const express = require('express')

const {showResult} = require('./controller/controller.js')

const ejs = require('ejs')

const app = express()

//使用ejs模板引擎
app.set('view engine','ejs')

app.get('/:number',showResult);
app.use(express.static('static'))
app.listen(3003,()=>{
    console.log('3003端口成功运行');
})