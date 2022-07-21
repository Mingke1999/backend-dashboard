
const express=require('express')
const router=express.Router()
const sqlExec=require('../mysql')

router.post('/add',function(req,res,next){
    const sql='insert into service values(null,?,?,?,?,?,?)'
    const {access,sname,mname,category,capacity,icons}=req.body
    const arr=[access,sname,mname,category,capacity,icons]
    sqlExec(sql,arr,function(err,data){
        if(err){
            next(err)
            return
        }
        if(data.affectedRows){
            res.send({code:'00000',success:true})
        }
    })
})


router.get('/fetching',function(req,res,next){
    const sqlUser='select * from user where email=?'
    sqlExec(sqlUser,[req.query.email],function(err,data){
        if(err)
        {
            next(err)
            return
        }
        if(data&&data.length)
        {
            const uid = data[0].id
            const sql='select * from service where mid=?'
            //const sql='select * from test'
            
            //const sql='select * from service'
            sqlExec(sql,[uid],function(err,data){
                if(err){
                    next(err)
                    return
                }
                res.send({code:'00000',records:data})
                //res.send({code:'11111',records:data,message:'something went wrong'})
            })
            
        }
    
    })

})   
    
router.post('/edit',function(req,res,next){
    const sql='update service set `access`=?,`sname`=?,`mname`=?,`category`=?,`capacity`=?,`icons`=? where `id`=? '
    const {access,sname,mname,category,capacity,icons,id}=req.body
    sqlExec(sql,[access,sname,mname,category,capacity,icons,id],function(err,data){
        if(err){
            next(err)
            return
        }
        if(data.affectedRows){
            res.send({code:'00000',success:true})
        }
    })
})

router.post('/delete',function(req,res,next){
    const sql='delete from service where `id`=? '
    sqlExec(sql,[req.body.id],function(err,data){
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