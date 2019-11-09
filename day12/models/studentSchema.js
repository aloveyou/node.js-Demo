const mongoose = require('mongoose')

let stuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sex:String,
    yuwen:Number,
    shuxue:Number,
    yinyu:Number
})
module.exports = mongoose.model('classinfo',stuSchema)
