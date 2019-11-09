const Student = require('../models/studentSchema')
//首页
exports.showIndex = async cxt=>{
    const result = await Student.find().sort({yuwen:-1})
    await cxt.render('index',{
        result
    })
}
//添加学生页面
exports.showAdd = async cxt=>{
    await cxt.render('showAdd')
}
//把前端的数据保存到数据库中
exports.saveStu = async cxt=>{
    //获取前端的数据
    const {xuesheng,sex,yuwen,shuxue,yinyu} = cxt.request.body
    //查询数据库 有没有这个学生的名字  如果有就不存  如果没有就存储
    const result = await Student.find({ name:xuesheng})
    if(!result.length){  //如果没找到
        Student.create({    //存储学生的信息
            name:xuesheng,
            sex,
            yuwen,
            shuxue,
            yinyu
        })
        cxt.body = '添加学生成功'
    }else{      //如果找到了该学员
        cxt.body = '不能添加重复的学生'
    }
}
//展示删除学生的页面
exports.showRemove= async cxt=>{
    await cxt.render('showRemove')
}


//根据前端的学生姓名  删除数据库的学生信息
exports.removeStudent = async cxt=>{
    const {xuesheng} = cxt.request.body;
    //从数据库中查询该学生 如果不存在该学生 则无法删除  如果存在该学生 才删除
    const result = await Student.findOne({name:xuesheng})
    if(result) { //如果找到了该学生
        await Student.deleteOne(result)
        cxt.body = '该学生已删除成功'
    }else{
        cxt.body = '该学生不存在 无法删除'
    }
}

//展示修改学生的页面
exports.showUpdate= async cxt=>{
    await cxt.render('showUpdate')
}

//根据前端的学生姓名  修改数据库的学生信息
exports.updateStudent = async cxt=>{
    const {xuesheng} = cxt.request.body
    // 查询数据库 如果有该学生 就修改  如果没有该学生 就没法修改
    const result = await Student.findOne({name:xuesheng})
    // console.log(result);
    if(result){ //如果找到了该学生 那就修改学生信息
        await Student.updateOne({name:xuesheng},{$set:cxt.request.body})
        cxt.body = '该学员信息已成功修改'
    }else{
        cxt.body = '该学生不存在 无法修改'
    }
}

//展示查看学生的页面
exports.showCheck= async cxt=>{
    await cxt.render('showCheck')
}

//根据前端的学生姓名  查看数据库的学生信息
exports.checkStudent = async cxt=>{
    const {xuesheng} = cxt.request.body;
    // 查询数据库 如果有该学生 就返回该学生的信息  如果没有该学生 就没法查看
    const result = await Student.findOne({name:xuesheng})
    if(result){
        cxt.body = {
            status:0,       //如果后台的操作是成功的
            result
        }
    }else{
        cxt.body = {
            status: 1,     //如果后台的操作是失败的
            msg:'该学生不存在 无法查看'
        }
    }
}