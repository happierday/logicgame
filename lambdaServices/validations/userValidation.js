let regExp;

function validateUsername(username){
    if(username.length < 5 || username.length > 20){
        return false;
    }
    regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return (regExp.test(username))? true : false;
}

function validateEmail(email){
    if(email.length < 5 || email.length > 50){
        return false;
    }
    regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return (regExp.test(email))? true : false;
}

function validatePassword(password){
    if(password.length < 8 || password.length > 50){
        return false;
    }
    regExp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/);
    return (regExp.test(password))? true : false;
}

module.exports = {
    validateEmail: validateEmail,
    validateUsername: validateUsername,
    validatePassword: validatePassword
}