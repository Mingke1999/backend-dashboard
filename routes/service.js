const express=require('express')
const router=express.Router()
const sqlFn=require('../mysql')

router.post('/add',function(req,res,next){
    const sql='insert into service values(null,?,?,?,?,?,?)'
    const {access,sname,mname,category,capacity,icons}=req.body
    const arr=[access,sname,mname,category,capacity,icons]
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


router.get('/list',function(req,res,next){
    const sql='select * from service'
    //const sql='select * from test'
    sqlFn(sql,[],function(err,data){
        if(err){
            next(err)
            return
        }
        res.send({code:'00000',records:data})
        //res.send({code:'11111',records:data,message:'something went wrong'})
    })
})

module.exports=router