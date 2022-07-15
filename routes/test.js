const express=require('express')
const router=express.Router()
const sqlExec=require('../mysql')

router.get('',function(requ,res,next){
    const sql='select * from state'
    sqlExec(sql,[],function(err,data){
        if(err){
            next(err)
            return  
        }
        res.send({code:'00000',record:data})
    })
})


module.exports=router