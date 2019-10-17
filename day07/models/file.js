const fs = require('fs')

exports.saveData = function(phone,food){
    fs.writeFile(`./data/${phone}.txt`,JSON.stringify({
        phone,
        food
    }),function(err){
        if(err){
            console.log('写入失败')
        }else{
            console.log('写入成功')
        }
    })
}

exports.getAll = function(callBack){
    fs.readdir('./data',function(err,data){
        console.log(err,data)
        if(err)return
        let result = data.map(item=>{
            return item.split('.')[0]
        })
        callBack(result)
    })
}

exports.getOne = function(phone,callBack){
    fs.readFile(`./data/${phone}.txt`,function(err,data){
        if(err)return
        callBack(JSON.parse(data.toString()))
    })
}