
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => { //this function makes the submit button not reload right after if something is wrong - so if anything is wrong the page will not reload when hitting submit as it normally would
    e.preventDefault();
    checkInputs(); 
} ); 

function setError(element, message){
    const parentEl = element.parentElement;  //target inputs parent 
    const errorMessage = parentEl.querySelector('.error-message'); //target first element in a parent with class 'error', this is the element that will display the error message
    
    errorMessage.innerHTML = message; //add error message into the element designated to display error
    parentEl.className = 'field error'; //add error class that changes style and visibility of elements

    const errorIcon = parentEl.querySelector('.error-icon');

    errorMessage.style.visibility = 'visible';
    errorIcon.style.visibility = 'visible';  

    if(parentEl.className === 'field error'){  //should move error icon if submit is clicked but the field is still empty but does not work
        errorIcon.className = 'error-icon animate'
    }
} 

function setSuccess(element){
    const parentEl = element.parentElement;  
    const errorMessage = parentEl.querySelector('.error-message'); 

    errorMessage.innerHTML = '';
    parentEl.className = 'field';

    const errorIcon = parentEl.querySelector('.error-icon');

    errorMessage.style.visibility = 'hidden';
    errorIcon.style.visibility = 'hidden'; 
}

function validEmail (email) {
    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  //re = regular expression
    return re.test(String(email).toLowerCase());
}

function checkInputs (){
    const firstNameValue = firstName.value.trim(); // .trim() removes spaces, so if only spaces are typed in the input it is considered empty
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();

    if (firstNameValue === ''){
        setError (firstName, 'First name cannot be empty')
    } else {    
        setSuccess(firstName);
    };

    if (lastNameValue === ''){
        setError(lastName, 'Last name cannot be empty')
    } else {
        setSuccess(lastName);
    };

    if (emailValue === ''){
        setError(email, 'Email cannot be empty')
    } else if (!validEmail(emailValue)){
        setError(email, 'Looks like this is not an email')
    } else {
        setSuccess(email);
    };

    if (passwordValue === ''){
        setError(password, 'Password cannot be empty')
    } else {
        setSuccess(password);

    /*   if we have a repeat password input - passwords must match:

    if (password2Value === ''){
        setError(passsword2, 'Please repeat your password')
    } else if (password2Value !== passwordValue){
        setError(password2, 'Passwords must match')
    } else {
        setSuccess(password2);
    };
     */
    };
} 

/*

function animateIcon(){   //only works once for the first time error is shown, then not, probably because of the preventDefault ?
    if (document.getElementsByClassName('error-icon').parentElement === 'field error'){
        document.getElementsByClassName('error-icon').className = 'error-icon animate'
    }
}

function removeErrorFirstName(){
    if (firstName.parentElement.className === 'field error'){
        firstName.parentElement.className = 'field';  //remove error class after clicking on component again
    }
};

function removeErrorLastName(){
    if (lastName.parentElement.className === 'field error'){
        lastName.parentElement.className = 'field';  //remove error class after clicking on component again
    }
}
*/

//this does not work, it wont throw error again if one is filled and the other empty


//?? how to remove it for all fields after clicking on just one ?
