const express=require('express')
const router=express.Router()
const sqlExec=require('../mysql')

router.get('/state',function(req,res,next){
    const sql='select * from `state`'
    sqlExec(sql,[],function(err,data){
        if(err){
            next(err)
            return
        }
        res.send({code:'00000',records:data})
    })
})

router.get('/postcode',function(req,res,next){
    const sql='select * from postcode where `pid`=?'
   
    sqlExec(sql,[req.query.pid],function(err,data){ 
        if(err){
            next(err)
            return
        }
        res.send({code:'00000',records:data})
       
    })

})

router.get('/city',function(req,res,next){
    const sql='select * from city where `pid`=?'
   
    sqlExec(sql,[req.query.pid],function(err,data){ 
        if(err){
            next(err)
            return
        }
        res.send({code:'00000',records:data})
       
    })

})
module.exports=router;