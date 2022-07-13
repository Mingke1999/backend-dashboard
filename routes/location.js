const express=require('express')
const router=express.Router()
const sqlFn=require('../mysql')

router.get('/state',function(req,res,next){
    const sql='select * from `state`'
    sqlFn(sql,[],function(err,data){
        if(err){
            next(err)
            return
        }
        res.send({code:'00000',records:data})
    })
})

router.get('/city',function(req,res,next){
    const sql='select * from city where `pid`=?'
    sqlFn(sql,[req.query.pid],function(err,data){ 
        //console.log('req.query.pid')
        //console.log(req.query.pid)//req.query.pid
        if(err){
            next(err)
            return
        }
        res.send({code:'00000',records:data})
        
    })
})

module.exports=router;