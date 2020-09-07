var btn = document.getElementById("submit-btn");
var w_icon = document.getElementById("warning-icon");
var w_text = document.querySelector(".content__input");
var formValue = document.getElementById("email");
var formclass = document.querySelector(".content_email");


// const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function warning(e){
        e.preventDefault();

        if (!formValue.validity.valid || !input.value){
                w_icon.style.display = "block"
                w_text.classList.add("show")
                formValue.style.border ="2.5px solid var(--primary_2)"

                // a function to be executed after a time out
                setTimeout(() => {
                    w_icon.style.display = "none"
                    w_text.classList.remove("show")
                    formValue.style.border ="1px solid var(--primary_1)"
                },2000);
        }
}

btn.addEventListener("click",warning);
btn.addEventListener("submit",warning);
