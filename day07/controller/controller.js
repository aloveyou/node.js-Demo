
const {saveData,getAll,getOne} = require('../models/file.js')

exports.order = function(req,res){
    const {phone,food} = req.body
    saveData(phone,food)
    res.send('订单成功，请耐心等待。')
}

exports.showAll = function(req,res){
    getAll(function(result){
        res.render('showAll',{
            result
        })
    })
}

exports.showOne = function(req,res){
    let {phone} = req.params
    getOne(phone,function(result){
        res.render('showOne',result)
    })
}
