const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');


//Show Error Function

function showError(input, message)
{
    const field = input.parentElement;
    
    field.className="field error";
    const small = field.querySelector('small');
    small.innerText = message;
}

//Show Success Function

function showSuccess(input)
{
    const field = input.parentElement;
    field.className = "field success";
}


//Check Inputs Required
function checkRequired(inputArray)
{  Array.from(inputArray).forEach(function(input)
    {    
        
        if(input.value.trim() === '')
            {
                showError(input, `${document.getElementById(input.id).parentElement.querySelector('label').innerText} is required.`);
                return(false);
            }
        else
            {
                showSuccess(input);
                return(true);
            }
      
    }
    )
}


//Check Email Validation

function validateEmail(input) {
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(input.value === '')
    {
        checkRequired(input);
    }
    
    else if(input.value.trim() !== '' && re.test(String(input.value.trim()).toLowerCase()))
    {
        showSuccess(input);
        console.log("success email test");
    }
    else
    {
        showError(input,'Email is invalid');
        console.log("failure email test");
    }
}

//Password Match

function checkPasswords(input1, input2)
{
   
 
        if(input1.value !== input2.value)
        {
            showError(input2, 'Password did not match.');         
        }
       
}

//Check Input Length
function checkInputLength(input, min, max)
{   while(checkRequired === true)
    {
         if(input.value.length < min || input.value.length > max)
            {   console.log('error in length');
                showError(input, `${document.getElementById(input.id).parentElement.querySelector('label').innerText} between ${min} and ${max} characters.`);
            }
    }
   
}


//EventListner

form.addEventListener('submit', function(e)
{   
    e.preventDefault();
    checkRequired([username, password, password2, email]);
    validateEmail(email);
    checkPasswords(password, password2);
    checkInputLength(username, 3, 15);
    checkInputLength(password, 6, 25);
})




