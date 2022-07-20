const express=require('express')
const app=express()
const test=require('./routes/test')
const service=require('./routes/service')
const area=require('./routes/location')
const upload=require('./routes/uploads')
const user=require('./routes/user')
const login=require('./routes/login')
const bodyParser=require('body-parser')


app.use(express.static('./data'))   //when visiting port 3030, directly go directory /data 
app.use(bodyParser.json()) //middleware
app.use('/api',test)
app.use('/api/service',service)
app.use('/api/area',area)
app.use('/api/user',user)
app.use('/api/upload',upload)
app.use('/api/login',login)
app.use(function(err,req,res,next){
    console.info(err.stack)
    res.status('500').send('server side went wrong')
})

app.listen('3030',function(){
    console.log('listening on the port 3030')
}) 