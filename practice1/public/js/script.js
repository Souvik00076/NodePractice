
console.log("hello");
//define the button first
var loginButton=document.getElementById('login_form');
var singUpButton=document.getElementById('sign_up_form');

if(loginButton){
//add event listeners
loginButton.addEventListener('submit',event=>{  
        event.preventDefault();
        //fetch email 
        let username=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        if(validateEmail(username)){
            alert("what");
            //do your work here i.e call to the server
            const flag=fetchData('login',username,password);
            if(flag==true) alert("Login Succefull");
            else alert("User has not signed up");
        }
});
}
function fetchData(route,username,password){
    fetch(route,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({username,password})
    }).then(response=>{
        if(response.status==512) alert("Internal Server error");
        else if(response.status==200) return true;
        return false;  
    }).catch(error=>{if(response.status==200) return true;
            alert("Error Client Side");
    });
    return false;
}
if(singUpButton){
singUpButton.addEventListener('submit',event=>{
    event.preventDefault();
    let username=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('confPass').value;
    
    if(validateEmail(username) &&
    validatePassword(password,confirmPassword)){
        const flag=fetchData('signUp',username,password);
        if(flag==true) alert("SignUp Succesfull");
        else alert("User already exist");  
    }

});
}

function validateEmail(username){
    //check validity using regular expression and based upon that return true or false
    return true;
}

function validatePassword(p1,p2){
    //check whether two password are same or not
    return true;
}