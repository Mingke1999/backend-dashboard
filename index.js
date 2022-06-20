const express=require('express')
const app=express()
const test=require('./routes/test')

app.use('/',test)
app.use(function(err,req,res,next){
    console.info(err.stack)
    res.status('500').send('server side went wrong')
})

app.listen('3000',function(){
    console.log('listening on the port 3000')
}) 