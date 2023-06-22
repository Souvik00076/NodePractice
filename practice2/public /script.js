const { response } = require("express");

var submitButton=document.querySelector('button[type=submit]');

if(submitButton){
    submitButton.addEventListener('click',(event)=>{
        event.preventDefault();
        const text=document.getElementById('textInput').value;
        const number=document.getElementById('numberInput').value;

        fetch( `/user/${text}/${number}`,{
            method:'POST',
          
        }).then(response=>{
            document.getElementById('h1').textContent=response;
        }).catch(error=>{
            document.getElementById('h1').textContent="ERROR";
        });
    });
}