const fs = require('fs')


//read函数的作用是读取本地的data目录中有没有number的因数数组
exports.read = function(num,callBack){
    // ../data/12.txt
    fs.readFile(`./data/${num}.txt`,function(err,data){
        if(err){    //如果没有读取到number.txt文件
            callBack(-1)
        }else{
            callBack(JSON.parse(data.toString()))
        }
    })
}

//write函数的作用是  把计算好的因数数组 存到data目录中
exports.write = function(num,result){
  //[1,3,41,123]  '[1,3,41,123]'
    fs.writeFile(`./data/${num}.txt`,JSON.stringify(result),function(err){
        if(err){
            console.log('写入失败');
        }else{
            console.log('写入成功');
        }
    })
}