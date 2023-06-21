//define the button first
var loginButton=document.getElementById('login-form');
var singUpButton=document.getElementById('sign-up-form');


//add event listeners
loginButton.addEventListener('submit',event=>{  
        event.preventDefault();
        //fetch email 
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        if(validateEmail(email)){
            //do your work here i.e call to the server

        }
});

singUpButton.addEventListener('submit',event=>{
    event.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('confPass').value;
    if(validateEmail(email) &&
    validatePassword(password,confirmPassword)){
     //call the   
    }

});


function validateEmail(email){
    //check validity using regular expression and based upon that return true or false
}

function validatePassword(p1,p2){
    //check whether two password are same or not
}