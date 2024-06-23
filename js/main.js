'use strict';
let user_mail = document.getElementById('sI-ml');
let user_pass = document.getElementById('sI-pW');
let signInBtnElement = document.getElementById('sIn-btn');
var currentName = '';
let currentUsers = [];
if (JSON.parse(localStorage.getItem('allUsers')) != null) {
    currentUsers = JSON.parse(localStorage.getItem('allUsers'));
}

signInBtnElement.addEventListener("click", function () {
    if (currentUsers.length != 0) {
        var not_found = true;
        for (let i = 0; i < currentUsers.length; i++) {
            if (user_mail.value.toLowerCase() == currentUsers[i].email && user_pass.value == currentUsers[i].password) {
                signInBtnElement.setAttribute('href', './homePage.html');
                currentName = currentUsers[i].fullName;
                localStorage.setItem('curName', currentName);
                not_found = false;
            }
        }
        if (not_found) {
            document.querySelector('.sI-msg').classList.remove('d-none');
        }
    }
    else {
        document.querySelector('.empty-msg').classList.remove('d-none');
    }
});