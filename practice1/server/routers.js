const express=require('express');
const bodyParse=require('body-parser');
const mysql=require('./database')
const router=express.Router();
const path=require('path');
router.use(express.static(path.join(__dirname,'../public')));
 router.get('/',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'../public/html/signup.html'));
});

router.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    database.searchCredential(userame,password,(error,result)=>{
                //if error send status 512 to handle database error
            if(error) res.sendStatus(512);
            if(result.length>0) res.sendStatus(200);
            else result.sendStatus(212);//to show user hasnot signed up
    });
});
router.post('/signUp',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    database.storeCredential(username,password,(error,result)=>{
        if(error) res.sendStatus(512);
        if(result.affectedRows>0) res.sendStatus(200);
        else result.sendStatus(212);//to show user hasnot signed up
});
    });
module.exports=router;