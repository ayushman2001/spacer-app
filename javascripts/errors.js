console.log('connected')
var user_name = document.getElementById('user_name')
var email = document.getElementById('user_email')
var contact = document.getElementById('contact_number')
user_name.addEventListener('keyup', logKey_name);
contact.addEventListener('keyup', logKey_number);
email.addEventListener('keyup', logKey_email);

function checkAlpha(str){
    return (/^[a-zA-Z]+$/.test(str));
}

function checkMobile(str){
    return ((/^[0-9]+$/.test(str)) && (str.length===10));
}

function ValidateEmail(str) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)){
        return (true)
    }
    return (false)
}

function logKey_name(e){
    if(checkAlpha(user_name.value)){
        user_name.classList.remove('is-invalid')
        user_name.classList.add('is-valid')
    }
    else {
        user_name.classList.remove('is-valid')
        user_name.classList.add('is-invalid')
    }
}

function logKey_number(e){
    if(checkMobile(contact.value)){
        contact.classList.remove('is-invalid')
        contact.classList.add('is-valid')
    }
    else {
        contact.classList.remove('is-valid')
        contact.classList.add('is-invalid')
    }
}

function logKey_email(e){
    if(ValidateEmail(email.value)){
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    else {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
    }
}