const inputs = [...document.querySelectorAll(".input-box")];
const AUTH_CODE = "1234";


document.querySelector(".two-factor-from").addEventListener("keypress",(e)=>{
    if(e.target.matches(".input-box")){
        if(/\D/.test(e.key)  ||  !!e.target.value){
            e.preventDefault();
        }
    }
});


document.querySelector(".two-factor-from").addEventListener("input",(e)=>{
    if(e.target.matches(".input-box")){
       const index = inputs.indexOf(e.target);
       const nextInput = inputs[index+1];
       if(nextInput)
        nextInput.focus();
    }
});

document.querySelector(".two-factor-from").addEventListener("keydown",(e)=>{
    if(e.target.matches(".input-box") && e.keyCode ===8 && e.target.selectionStart===0 &&  e.target.selectionEnd ===0){
       const index = inputs.indexOf(e.target);
       const prevInput = inputs[index-1];
       if(prevInput)
       prevInput.focus();
    }
});

document.querySelector(".two-factor-from").addEventListener("paste",(e)=>{
    if(e.target.matches(".input-box")){
        e.preventDefault();
    }
})

document.querySelector("#submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    let authCode = "";
    inputs.forEach((elem)=>{
        authCode += elem.value;
    })
    if(AUTH_CODE === authCode)
    alert("Validated")
    else
    alert("invalid");
});