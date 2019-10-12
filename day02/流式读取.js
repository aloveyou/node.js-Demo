const fs = require('fs');

//创建一个读取指定文件的可读流
const rs = fs.createReadStream('C:/Users/ASUS/Pictures/eliwa/05.jpg');
//创建一个在指定文件写入的可写流
const ws = fs.createWriteStream('./day02/2.jpg');
/**
 * 通过rs.readableFlowing查看可读流的状态，默认为null表示静止。
 */

 rs.pipe(ws)

//console.log(rs.readableFlowing)

//让可读流运动
//rs.resume()

//console.time(2)
rs.on('data',function(chunk){
    // console.log(rs.readableFlowing,chunk.length)
    ws.write(chunk);
})
// rs.on('end',function(){
//     //console.timeEnd(2)
//     console.log('回调')
// })


