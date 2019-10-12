const fs = require('fs');
const path = require('path')
exports.file = function(data) {
    let {name,fileData} = data
    //如果文件夹存在则不创建
    if(!fs.existsSync(name)){
        fs.mkdirSync(name);
        fileData.forEach(item=>{
            const {type} = item;
            const fullpath = path.join(__dirname,name,item.name);
            console.log(fullpath);
            if(type==='dir'){
                fs.mkdirSync(fullpath)
            }else{
                // fs.writeFile(fullpath,'this is html file',()=>{})//回调函数
                fs.writeFileSync(fullpath,'this is html file')//同步
            }
        })
    }
}