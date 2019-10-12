const fs = require('fs')
//删除文件
// fs.unlinkSync('./day01/1.txt')

//创建新的空文件夹
// fs.mkdirSync('./day02')

//删除指定文件夹
//fs.rmdirSync('./day02')

//读取指定文件夹中的数据
// fs.readdir('C:/Users/ASUS/Desktop/NicRay/node',function(err,data){
//     console.log(err,data);
// })

//查看文件/文件夹的状态
// console.log(fs.statSync('C:/Users/ASUS/Pictures/eliwa/05.jpg'));

//判断文件是否存在
// console.log(fs.existsSync('./day01/buffer.js'))

//rename(oldpath,newpath,回调函数) 把原来的文件从老路径剪切到新路径并重命名
// fs.rename('./buffer1.js','./day01/buffer.js',function(err,data){
//     console.log(err,data);
// })

/* 只要文件的状态改变就会触发回调函数
 watchFile(文件路径，监听频率，回调函数)*/
fs.watchFile('./day01/1.txt',{interval:23},function(nextStat,preStat){
    console.log(nextStat.size,preStat.size);
})


