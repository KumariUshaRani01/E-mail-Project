const checkAtTheRate = (email) => {
    return email.includes("@");
}

// ajay@gmail.com

function validSyntax(str) {

    const alphaNumericRegex = /^[A-Za-z0-9]+$/;
    const alphaNumericSpecialRegex = /^[A-Za-z0-9-._+]+$/;

    // string must be start with alphaNumeric latter
    if (!alphaNumericRegex.test(str.charAt(0))) {
        return {
            isValid: false,
            message: `User Name can not start with "${str.charAt(0)}"`
        }
    }

    // string must be end with alphaNumeric latter
    if (!alphaNumericRegex.test(str.charAt(str.length - 1))) {
        return {
            isValid: false,
            message: `Domain Name can not end with "${str.charAt(str.length - 1)}"`
        }
    }


    // rest latter on can be alphaNumeric and three special char (-_.)
    if (alphaNumericSpecialRegex.test(str)) {
        return {
            isValid: true,
        }
    }

    // default return
    return {
        isValid: false,
        message: "Not a valid email"
    }
}

const checkValidEmail = (email) => {
    email = email.trim();

    // Check Email must include @
    if (!checkAtTheRate(email)) {
        return {
            isValid: false,
            message: `Email must contain '@'`
        }
    }
    // ajay@gmail.com

    const indexOfAt = email.indexOf("@");
    const userName = email.slice(0, indexOfAt);  // slice username
    const serverName = email.slice((indexOfAt + 1)); // slice domain

    // if userName and serverName with function validSyntax() if it return two value {isValid: , message} it mean userName is in valid syntax

    const validUserNameSyntax = validSyntax(userName);
    const validDomainNameSyntax = validSyntax(serverName);

    if (!validUserNameSyntax.isValid) {
        return validUserNameSyntax
    }

    if (!(validDomainNameSyntax.isValid)) {
        return validDomainNameSyntax;
    }

    return {
        isValid: true,
        message: 'Valid E-mail address'
    }
}


function main () {
    const email = document.getElementById('userEmail').value;
    const resultElement = document.getElementById('result')

    const isValidEmail = checkValidEmail(email);

    if(isValidEmail.isValid) {
        resultElement.style.color = 'green';
        resultElement.innerHTML = isValidEmail.message;
    }
    else {
        resultElement.style.color = 'rgba(192, 0, 0, 0.8)';
        resultElement.innerHTML = isValidEmail.message;
    }
}

const clearMessage = () => {
    document.getElementById('result').innerHTML = "";
}
