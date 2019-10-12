/**
 * 在node中每个js文件都是一个模块
 * 每个js文件的所有代码都被一个立即执行函数包裹住
 * arguments.callee+''
 * 立即执行函数的5个形参
 * exports      用来暴露模块数据的对象 module.exports===exports
 * require      函数类型 专门用来引入模块
 * module       模块对象
 * __filename   文件的绝对路径
 * __dirname    文件夹的绝对路径
 * 
 * 模块的分类
 *      系统模块 node内置的 fs path
 *      自定义模块
 *      第三方模块
 * 
 * 
 * 
 */
const a = 1;
console.log(module);


