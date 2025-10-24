let mouse = document.querySelector(".mouse");
window.addEventListener("mousemove",function(dets){
     mouse.style.top = dets.clientY + "px";
    mouse.style.left = dets.clientX + "px";
});

let form = document.querySelector("form");
let email = document.querySelector("#email")
let password = document.querySelector("#password")
form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\[\]{}|;:'",.<>\/?\\`~]).{8,}$/;

    let emailans = emailRegx.test(email.value)
    let passwordans = passwordRegx.test(password.value)

    let isValid = true;
    if(!emailans){
        document.querySelector("#emailError").textContent = "your email is incorrect"
        document.querySelector("#emailError").style.display = "initial"
        isValid= false;
    }
   
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "your password is incorrect"
        document.querySelector("#passwordError").style.display = "initial"
        isValid= false;
        
    }
   if(isValid){
    document.querySelector("#message").style.display= "block"
   } 
   
    
    
    

})