const express=require('express')
const router=express.Router()
const sqlExec=require('../mysql')

router.post('/add',function(req,res,next){
    
    const sql='select * from user where locate(?,username) > 0'
    //checking if the word repeat, if it is so then 1
    sqlExec(sql,[req.body.username],function(err,data){
        if(err){
            next(err)
            return
        }
        if(data&&data.length){  //if username exits then warning
            res.send({code:'-1',message:'The username has been token'})
        }else{  //the username is free to go
            const sql='insert into user values (null,?,?,?,?,?,?)'  //id set as self increment
            const {location,profile,username,password,email,phonenumber}=req.body
   
            sqlExec(sql,[location,profile,username,password,email,phonenumber],function(err,data){
                if(err){
                    next(err)
                    return
                }
                if(data.affectedRows){ //check if there any change on the table
                    res.send({code:'00000',success:true})   //success
                }
            })
        }
    })
})

router.get('/all',function(req,res,next){
    const {query}=req
    const {current=1,pageSize=5}=query
    const filterSql=`select count(*) as num from user ${req.query.uname?'where locate(?,username)>0':''}`

    sqlExec(filterSql,[query.uname],function(err,data){
        if(err){
            next(err)
            return
        }
        const total=data[0].num 
        const sql=`select * from user ${req.query.uname?'where locate(?,username)>0':''}
        limit ${pageSize*(current-1)},${pageSize}`
        sqlExec(sql,[req.query.uname],function(err,data){
            if(err){
                next(err)
                return
            }
            res.send({code:'00000',records:data,pagination:{total,pageSize}})  
        })
    })


   
})
module.exports=router