//path模块专门用来处理路径
const path = require('path');

console.log(__filename)
console.log(path.parse(__filename))
console.log(path.extname(__filename))

console.log(path.basename(__filename))
console.log(path.dirname(__filename))

console.log(path.join(__filename,'nic'))
