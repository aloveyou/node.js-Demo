const fs = require('fs');//fs--(file system是node内置的核心模块)
// console.log(fs);
const path = require('path');
filename = path.join(__dirname,'buffer.js');
// fs.readFile(filename,'utf-8',function(err,data){
//     console.log(err,data)//utf-8或者data.toString
// })

console.time(1)
fs.readFile('C:/Users/ASUS/Pictures/eliwa/05.jpg',function(err,data){
    // console.log(err,data)
    console.timeEnd(1)
    // fs.writeFile('./day01/1.jpg',data,function(err){
    //     console.log(err);
    // })
})

// fs.writeFile('C:/Users/ASUS/Desktop/NicRay/node/day01/1.txt','am nicray',function(err){
//     console.log(err)
// })


