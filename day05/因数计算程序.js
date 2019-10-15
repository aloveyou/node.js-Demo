const express = require('express');

const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');

app.get('/:num',function(req,res){
    let {num} = req.params;
    console.log(num);
    let arr = []
    for(var i = 1;i < num;i++){
        if(num%i==0){
            arr.push(i)
        }
    }
    console.log(arr)
    res.render('demo',{
        list:arr
    })

})


app.use(express.static('static'))
app.listen(3001,()=>{
    console.log('3001端口成功运行');
})

