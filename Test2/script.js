let progress = document.querySelector(".progress-bar");
let h2 = document.querySelector("h2")
let p  = document.querySelector("p")
let count = 0;

let interval = setInterval(function () {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    p.textContent= `${count}%`  
  }
  else{
    h2.textContent = "Downloaded"
    clearInterval(interval);
  }
}, 30);

let banner = document.querySelector(".banner");
setTimeout(() => {
    banner.style.display = "none"
    alert("Your movie is Downloaded")
}, 3500);
