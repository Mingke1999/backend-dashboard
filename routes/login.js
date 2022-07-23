const express=require('express')
const router=express.Router()
const sqlExec=require('../mysql')
const CryptoJs=require('crypto-js')
const jwt = require('jsonwebtoken')
const  {jwtSecret}=require('../config')
router.post('',function(req,res,next){
    const sql='select * from user where `email`=? and `password`=?'
    const password=CryptoJs.AES.decrypt(req.body.password,'mingke').toString(CryptoJs.enc.Utf8)
    sqlExec(sql,[req.body.email,password],function(err,data){
        if(err){
            next(err)
            return
        }
        if(data&&data.length){
            const token=jwt.sign({
                username:data[0].username
            },jwtSecret)
            res.send({code:'00000',success:true,token,records:data})
        }else{
            res.send({code:'-1',message:'account or password fault'})
        }
            
    })
})

module.exports=router;