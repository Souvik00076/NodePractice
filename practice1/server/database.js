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
    const query='INSERT INTO ACCOUNTS(USER_NAME,PASSWORD) VALUES(?,?)';
    connection.query(query,[username,password],(err,result)=>{
          
            if(err){
                callback(null);
                return ;
            }
            callback(result);
    });
}
function searchCredential(username,password,callback){
    const query='SELECT *FROM ACCOUNTS WHERE USER_NAME=?,PASSWORD=?';
    connection.query(query,[username,password],(error,result)=>{
        if(error){
            callback(null);
            return ;
        }
        callback(result);
    });
}
module.exports={
    storeCredential,
    searchCredential
}