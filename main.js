// main javascript file for cooming-soon-pro=ject

// ToDo:dislay warning-icon and text when email validation is false

// export button to variable
const btn = document.getElementById('input__submit_btn');
// grab css display properties for warning-icon and text
const wIcon = document.getElementById('wIcon');
const wText = document.querySelector('.content__input');
// grab user input value
const emailValue = document.getElementById('email').value;

// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// the general email pattern
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    



