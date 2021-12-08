const inputs = document.querySelectorAll("input");
const msgErrors = document.querySelectorAll(".error-text");

for(let i = 0; i < inputs.length; i++){
inputs[i].addEventListener("focusout", function(){
        if(inputs[i].value === ''){
            inputs[i].classList.add("error-img");
            inputs[i].style.border = "2px solid var(--red)";
            msgErrors[i].style.display = "block";
            inputs[i].placeholder = '';
        }
        else if(inputs[i].value !== ''){
            inputs[i].classList.remove("error-img");
            msgErrors[i].style.display = "none";
            inputs[i].style.border = "1px solid lightgray";
        }
    })
}






