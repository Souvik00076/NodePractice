const mySql=require('mysql');

//create the connection
const connection=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'practice1'
});

connection.connect(error=>{
        //define database error as error code 500
});

function storeCredential(username,password,callback){
    const query='INSERT INTO ACCOUNTS VALUES(?,?)';
    connection.query(query,[username,password],(error,result)=>{
            if(error){
                callback(error,null);
                return ;
            }
            callback(null,result);
    });
}
function searchCredential(username,password,callback){
    const query='SELECT *FROM ACCOUNTS WHERE USER_NAME=?,PASSWORD=?';
    connection.query(query,[username,password],(error,result)=>{
        if(error){
            callback(error,null);
            return ;
        }
        callback(null,result);
    });
}
module.exports={
    storeCredential,
    searchCredential
}