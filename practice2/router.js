const express=require('express');
const router=express.Router();
const path=require('path');
router.use(express.static(path.join(__dirname,"/public")));
router.post('/user/:text/:id',(req,res,next)=>{
    const id=req.params.id;
    if(id<=45 || id>100) req.params.id=-1; 
    next();
});
router.post('/user/:text/:id',(req,res)=>{
    res.send(`Text = ${req.params.text} & id = ${req.params.id}` );
});
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
});
module.exports=router;

