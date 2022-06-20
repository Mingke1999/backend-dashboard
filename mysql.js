const mysql=require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'eventeasy'
})

const sqlFn=function(sql,arr,callback){
    connection.query(sql,arr,callback)
}

module.exports=sqlFn