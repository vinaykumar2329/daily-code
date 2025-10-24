
let mouse = document.querySelector(".mouse");
window.addEventListener("mousemove",function(dets){
     mouse.style.top = dets.clientY + "px";
    mouse.style.left = dets.clientX + "px";
   
})

