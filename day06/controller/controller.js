/*
*   controller.js这个文件只负责数据
* */
const {math} = require('../models/math')

const {read,write} = require('../models/file')
exports.showResult = function (req,res) {
    let {number} = req.params;

    // console.log(math(number));
    /*
    *   查询的时候  先读取本地有没有number的因数数组
    *   如果没有  那就计算因数数组  然后把因数数组存入到本地
    *   如果有  那就直接读取本地的因数数组
    * */
    let start = new Date;
    read(number,function(result){
        if(result==-1){ //如果没有读取到number.txt文件
            result = math(number)
            write(number,result)
        }
        res.render('demo',{
            list:result,
            time:new Date-start
        })

    })
}
