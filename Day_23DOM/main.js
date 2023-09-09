
const loginBtn = document.querySelector(".login");
const formAuth = document.querySelector(".form-auth");
loginBtn.addEventListener("click", function() {
    formAuth.classList.remove("hide");
})


const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function() {
    formAuth.classList.add("hide");
})


const navLogin = document.querySelector(".btn-login");
const navRegister = document.querySelector(".btn-register");
const formLogin = document.querySelector(".form-main.form-login");
const formRegister = document.querySelector(".form-main.form-register");

const inputForm = document.querySelectorAll(".login-register input");
const message = document.querySelectorAll(".login-register .message");

const showPassword = document.querySelectorAll(".view i");
const inputPassword = document.querySelectorAll("input[type = 'password']");

const emailFormat = document.querySelectorAll(".message--format");
const inputEmail = document.querySelectorAll("input.email");

const btnLogin = document.querySelector(".form-login button.submit");
const btnRegister = document.querySelector(".form-register button.submit");
const inputLogin = document.querySelectorAll(".form-login input")
const inputRegister = document.querySelectorAll(".form-register input")
const accountCheck = document.querySelector(".account-error span");
const accountRegisterCheck = document.querySelector(".account_register-error span");

navLogin.addEventListener("click", function() {
    if (!this.classList.contains("active")) {
        this.classList.add("active");
        navRegister.classList.remove("active");
        if (formLogin.classList.contains("hide")) formLogin.classList.remove("hide");
        if (!formRegister.classList.contains("hide")) formRegister.classList.add("hide");
        inputForm.forEach(function(item, index) {
            if (item.value !== "") item.value = "";
            if (item.classList.contains("valid"))  (item.classList.remove("valid"));
            if (item.classList.contains("error"))  (item.classList.remove("error"));
            if (item.classList.contains("error-email"))  (item.classList.remove("error-email"));
            if (message[index].classList.contains("error"))  (message[index].classList.remove("error"));
        });
        emailFormat.forEach(function(item) {
            if (item.classList.contains("error"))  (item.classList.remove("error"));
        });
        if (accountCheck.classList.contains("error")) accountCheck.classList.remove("error");
    }
});

navRegister.addEventListener("click", function() {
    if (!this.classList.contains("active")) {
        this.classList.add("active");
        navLogin.classList.remove("active");
        if (!formLogin.classList.contains("hide")) formLogin.classList.add("hide");
        if (formRegister.classList.contains("hide")) formRegister.classList.remove("hide");
        
        inputForm.forEach(function(item, index) {
            if (item.value !== "") item.value = "";
            if (item.classList.contains("valid"))  (item.classList.remove("valid"));
            if (item.classList.contains("error"))  (item.classList.remove("error"));
            if (item.classList.contains("error-email"))  (item.classList.remove("error-email"));
            if (message[index].classList.contains("error"))  (message[index].classList.remove("error"));
        });
        emailFormat.forEach(function(item) {
            if (item.classList.contains("error"))  (item.classList.remove("error"));
        });
        if (accountRegisterCheck.classList.contains("error")) accountRegisterCheck.classList.remove("error");
    }
});


var check = function() {
    inputForm.forEach(function(item, index) {
        if (item.value === "") {
            item.classList.add("error");
            message[index].classList.add("error");
        } else {
            if (item.classList.contains("error")) item.classList.remove("error");
            if (message[index].classList.contains("error")) message[index].classList.remove("error");
        }
    });
};



showPassword.forEach(function(item, index) {
    if (index % 2 === 0) {
        item.addEventListener("click", function() {
            inputPassword[index / 2].type = "text";
            item.classList.add("hide");
            showPassword[index + 1].classList.remove("hide");
        })
    } else {
        item.addEventListener("click", function() {
            inputPassword[(index - 1) / 2].type = "password";
            item.classList.add("hide");
            showPassword[index - 1].classList.remove("hide");            
        })
    }
});

inputForm.forEach(function(item, index) {
    item.addEventListener("blur", check);
    item.addEventListener("change", check);
    item.addEventListener("keyup", function() {
        if (item.value === "") {
            item.classList.add("error");
            message[index].classList.add("error");
        } else {
            if (item.classList.contains("error")) item.classList.remove("error");
            if (message[index].classList.contains("error")) message[index].classList.remove("error");
        }
    });
})



const validateEmail = function(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

inputEmail.forEach(function(item, index) {
    item.addEventListener("keyup", function() {
        if (!validateEmail(item.value) && item.value !== "") {
            emailFormat[index].classList.add("error");    
            if (item.classList.contains("valid")) item.classList.remove("valid");
            if (!item.classList.contains("error-email")) item.classList.add("error-email");
        } else {
            if (emailFormat[index].classList.contains("error")) emailFormat[index].classList.remove("error");
            item.classList.add("valid");
            if (item.classList.contains("error-email")) item.classList.remove("error-email");
        };
        if ((item.value === "") && (item.classList.contains("valid"))) item.classList.remove("valid");
    });
    item.addEventListener("keyup", check);
});




btnLogin.addEventListener("click", function() {
    var count = 0;
    inputLogin.forEach(function(item, index) {
        if (item.value === "") {
            item.classList.add("error");
            message[index].classList.add("error");
        } else {
            count++;
            if (item.classList.contains("error")) item.classList.remove("error");
            if (message[index].classList.contains("error")) message[index].classList.remove("error");
        }
    });
    if (count === 2) accountCheck.classList.add("error");
    else {
        if (accountCheck.classList.contains("error")) accountCheck.classList.remove("error");
    };
});

btnRegister.addEventListener("click", function() {
    var count = 0;
    inputRegister.forEach(function(item, index) {
        if (item.value === "") {
            item.classList.add("error");
            message[index + 2].classList.add("error");
        } else {
            count++;
            if (item.classList.contains("error")) item.classList.remove("error");
            if (message[index + 2].classList.contains("error")) message[index + 2].classList.remove("error");
        }
    });
    if (count === 3) accountRegisterCheck.classList.add("error");
    else {
        if (accountRegisterCheck.classList.contains("error")) accountRegisterCheck.classList.remove("error");
    };
})

