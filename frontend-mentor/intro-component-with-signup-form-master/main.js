const inputs = document.querySelectorAll("input");
const msgErrors = document.querySelectorAll(".error-text");
const button = document.querySelector(".green-button");

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

button.addEventListener("click", function(){

    if(inputs[0].value === ""){
        alert("No firstname")
        inputs[0].focus();
        return false;
    }
    if(inputs[1].value === ""){
        alert("No lastname")
        inputs[1].focus();
        return false;
    }
    if(inputs[2].value === "" || (!inputs[2].value.includes("@"))){
        alert("Incorrect email format")
        inputs[2].focus();
        return false;
    }
    if(inputs[3].value === ""){
        alert("Incorrect password format")
        inputs[3].focus();
        return false;
    }
})






