// step- 1:add event handaler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // document.body.style.backgroundColor = 'goldenRod';
    //step 2: get the email address inside the email input
    // always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get passward
    // 3. set the id on HTML
    // get the element
    // get the value from from the element
     const passwardField = document.getElementById('user-passward');
     const passward = passwardField.value;
     
    //  step4: verify email and pssward
    if(email === 'santan@baap.com' && passward === 'secret'){
        window.location.href = "bank.html";
    } 
    else{
       alert('invalid passward') 
    }
    
   
})  
