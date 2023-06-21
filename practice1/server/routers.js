const express=require('express');
const bodyParser=require('body-parser');
const database=require('./database')
const router=express.Router();
const path=require('path');
router.use(express.static(path.join(__dirname,'../public')));
router.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
router.use(bodyParser.json());
 router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html/signup.html'));
});

router.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    database.searchCredential(username,password,(result)=>{
                //if error send status 512 to handle database error
            if(result==null) res.sendStatus(512);
            else if(result.length>0) res.sendStatus(200);
            else result.sendStatus(212);//to show user hasnot signed up
    });
});
router.post('/signUp',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    database.storeCredential(username,password,(result)=>{
        if(result==null) res.sendStatus(512);
        else if(result.affectedRows>0) res.sendStatus(200);
        else result.sendStatus(212);//to show user hasnot signed up
});
    });
module.exports=router;