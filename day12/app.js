const mongoose = require('mongoose')
const Koa = require('koa')
const path = require('path')
const router = require('koa-router')()
const render = require('koa-ejs')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')

const app = new Koa()

const {
    showIndex,
    showAdd,
    saveStu,
    showRemove,
    removeStudent,
    showUpdate,
    updateStudent,
    showCheck,
    checkStudent
} = require('./controller/controller')

//解析post数据
app.use(bodyparser())
//自动为public目录中的资源设置路由
app.use(static('./public'))
//配置koa-ejs模板引擎
render(app,{
    root:path.join(__dirname,'view'),
    layout:'template',//view目录中模板
    viewExt:'html',//view目录中后缀名
});

//配置路由
app.use(router.routes())

router.get('/',showIndex)
router.get('/addStudent',showAdd)
router.post('/addStudent',saveStu)

router.get('/removeStudent',showRemove)
router.post('/removeStudent',removeStudent)

router.get('/updateStudent',showUpdate)
router.post('/updateStudent',updateStudent)

router.get('/checkStudent',showCheck)
router.post('/checkStudent',checkStudent)


//连接数据库
mongoose.connect('mongodb://localhost:27017/student',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('数据库连接success')

    app.listen(3000,()=>{
        console.log('3000端口开启')
    })
}).catch(()=>{
    console.log('数据库连接failed')
})
