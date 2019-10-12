const {file} = require('./file')
let programData = {
    name:'nicya',
    fileData:[
        {
            name:'css',
            type:'dir'
        },
        {
            name:'js',
            type:'dir'
        },
        {
            name:'img',
            type:'dir'
        },
        {
            name:'index.html',
            type:'file'
        }
    ]
}
file(programData)

