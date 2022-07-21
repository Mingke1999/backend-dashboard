const jwt = require('jsonwebtoken')
const  {jwtSecret}=require('../config')

function validLogin(req,res,next){
    const authToekn=req.headers['authorization']
    jwt.verify(authToekn,jwtSecret,function(rr,data){
        if(err){
            res.send({code:'100',message:'login unauthorized'})
        }else{
            req.authData=decode
            next()
        }
    })
}

module.exports=[validLogin]