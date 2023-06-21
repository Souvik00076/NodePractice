const express=require('express');
const app=express();
const router=require('./server/routers.js');
app.use('/',router);
app.listen(3000,()=>{
    console.log("server started at: 3000");
});