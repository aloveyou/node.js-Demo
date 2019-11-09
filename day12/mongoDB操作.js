const mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost:27017/student',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(async()=>{
    console.log('success')
    let stuSchema = new mongoose.Schema({
        name:String,
        height:{
            type:Number,
            required:true,
            default:175
        },
        weight:Number
    })
    let m = mongoose.model('classInfo',stuSchema)
    // //向集合中插入数据
    // m.create([{
    //     name:'alexyou',
    //     height:176,
    //     weight:66
    // },
    // {
    //     name:'nicray',
    //     height:176,
    //     weight:66
    // }])

    // //查看数据库的数据  find函数返回的是promise
    // const result = await m.find({name:'alexyou'})
    // console.log(result)

    // //删除数据库的数据      deleteOne  deleteMany
    // const result1 = await m.deleteOne({name:'alexyou'})
    // console.log(result1)

    // //修改数据库的数据          updateOne updateMany
    // const result2 = m.updateOne({weight:66},{$set:{weight:80}})
    // console.log(result2)




}).catch(()=>{
    console.log('failed')
})











