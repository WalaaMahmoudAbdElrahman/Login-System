'use strict'

let fN_sU_Element = document.getElementById('sU-fN');
const fN_RegExp = /[a-z]{3,}/;
let emailAddressElement = document.getElementById('sU-ml');
const ml_RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let passWordElement = document.getElementById('sU-pW');
const pW_RegExp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%_^&*])[a-zA-Z0-9!_@#$%^&*]{6,16}$/;
let confirmPassWordElement = document.getElementById('sU-pWc');
let signUpBtnElement = document.getElementById('sUP-btn');
let mailMsgError = document.querySelector('.ml-re-msg');
let allUsers = [];

if (JSON.parse(localStorage.getItem('allUsers')) != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

function addNewUser() {
    let emailFound = false;
    for (let i = 0; i < allUsers.length; i++) {
        if (emailAddressElement.value.toLowerCase() == allUsers[i].email) {
            emailFound = true;
            break;
        }
    }
    if (emailFound) {
        mailMsgError.innerHTML = 'Email is already taken before.';
    }
    else {
        let newUser = {
            fullName: fN_sU_Element.value,
            email: emailAddressElement.value.toLowerCase(),
            password: passWordElement.value,
        }
        allUsers.push(newUser);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));

    }
}



// function addNewUser() {
//     let newUser = {
//         fullName: fN_sU_Element.value,
//         email: emailAddressElement.value.toLowerCase(),
//         password: passWordElement.value,
//     }
//     allUsers.push(newUser);
//     localStorage.setItem('allUsers', JSON.stringify(allUsers));
// }


signUpBtnElement.addEventListener('click', function () {
    if (fN_RegExp.test(fN_sU_Element.value) && ml_RegExp.test(emailAddressElement.value) && pW_RegExp.test(passWordElement.value) && confirmPassWordElement.value == passWordElement.value) {
        let emailFound = false;
        for (let i = 0; i < allUsers.length; i++) {
            if (emailAddressElement.value.toLowerCase() == allUsers[i].email) {
                emailFound = true;
                break;
            }
        }

        if (emailFound) {
            mailMsgError.innerHTML = 'Email is already taken before.';
            mailMsgError.classList.remove('d-none');
        }
        else {
            signUpBtnElement.setAttribute('href', './index.html');
            addNewUser();
        }
        // signUpBtnElement.setAttribute('href', './index.html');
        // addNewUser();
    }
    else {
        if (!fN_RegExp.test(fN_sU_Element.value.toLowerCase())) {
            document.querySelector('.fN-re-msg').classList.remove('d-none');
        }
        else {
            document.querySelector('.fN-re-msg').classList.add('d-none');
        }

        if (!ml_RegExp.test(emailAddressElement.value)) {
            mailMsgError.innerHTML = 'Invalid Email Address.';
            document.querySelector('.ml-re-msg').classList.remove('d-none');
        }
        else {
            document.querySelector('.ml-re-msg').classList.add('d-none');
        }

        if (!pW_RegExp.test(passWordElement.value)) {
            document.querySelector('.pW-re-msg').classList.remove('d-none');
        }
        else {
            document.querySelector('.pW-re-msg').classList.add('d-none');
            console.log(confirmPassWordElement.value, passWordElement.value);
        }
        if (confirmPassWordElement.value != passWordElement.value) {
            document.querySelector('.pWc-re-msg').classList.remove('d-none');
        }
        else {
            document.querySelector('.pWc-re-msg').classList.add('d-none');
        }
    }
})