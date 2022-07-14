const express=require('express')
const app=express()
const test=require('./routes/test')
const service=require('./routes/service')
const area=require('./routes/location')
const bodyParser=require('body-parser')
const upload=require('./routes/uploads')

app.use(express.static('./data'))
app.use('/api',test)
app.use(bodyParser.json()) //middleware
app.use('/api/service',service)
app.use('/api/area',area)
app.use('/api/upload',upload)
app.use(function(err,req,res,next){
    console.info(err.stack)
    res.status('500').send('server side went wrong')
})

app.listen('3030',function(){
    console.log('listening on the port 3030')
}) 