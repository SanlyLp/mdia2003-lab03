document.querySelector(".mobile-nav").addEventListener("click",
function(e){
    const element = document.querySelector("main-nav");
    element.classList.toggle('s-show');
    e.preventDefault();

}, false)