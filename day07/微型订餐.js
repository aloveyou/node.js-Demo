const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.set('view engine','ejs')
const controller = require('./controller/controller.js')
app.use(bodyParser.urlencoded({extended:false}))

app.post('/order',controller.order)
app.get('/all',controller.showAll)
app.get('/all/:phone',controller.showOne)

app.use(express.static('public'))
app.listen(3005,()=>{
    console.log('3005成功运行');
})