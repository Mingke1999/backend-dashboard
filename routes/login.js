const express=require('express')
const router=express.Router()
const sqlExec=require('../mysql')
const CryptoJs=require('crypto-js')

router.post('',function(req,res,next){
    const sql='select * from user where `email`=? and `password`=?'
    const password=CryptoJs.AES.decrypt(req.body.password,'mingke').toString(CryptoJs.enc.Utf8)
    sqlExec(sql,[req.body.email,password],function(err,data){
        if(err){
            next(err)
            return
        }
        if(data&&data.length){
            res.send({code:'00000',success:true,records:data})
        }else{
            res.send({code:'-1',message:'account or password fault'})
        }
            
    })
})

module.exports=router;