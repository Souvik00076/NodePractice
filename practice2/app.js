/*var express=require('express');
const app=express();
app.use('/',(req,res,next)=>{
    console.log("middleware1");
    next();
});
app.use('/',(req,res,next)=>{
    console.log("middleware2");
    next();
});
app.use('/',(req,res,next)=>{
    console.log('middleware4');
    next();
},(req,res,next)=>{
    console.log('middleware5');
    next();
},(req,res,next)=>{
    console.log('middleware6');
    next();
});
app.get('/',(req,res,next)=>{
    res.send("What the hell");
});

app.listen(3000,()=>{
    console.log('app listening');
});
*/

const express=require('express');
const app=express();
const router=require('./router');
app.use('/',router);

app.listen(3000,()=>{
    console.log(`Server listening at 3000`);
});