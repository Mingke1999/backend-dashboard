const express=require('express')
const router=express.Router()
const sqlFn=require('../mysql')



router.post('/add',function(req,res,next){
    const sql='insert into service values(null,?,?,?,?,?)'
    const {snam,mname,category,capacity,icons}=req.body
    const arr=[snam,mname,category,capacity,icons]
    sqlFn(sql,arr,function(err,data){
        if(err){
            next(err)
            return
        }
        if(data.affectedRows){
            res.send({code:'00000',success:true})
        }
    })
})

module.exports=router