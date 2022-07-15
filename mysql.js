const mysql=require('mysql')
//database detail for connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'eventeasy'
})
//packaging query function to be used multilple times with less code
const sqlExec=function(sql,arr,callback){
    connection.query(sql,arr,callback)
}
//export query function
module.exports=sqlExec