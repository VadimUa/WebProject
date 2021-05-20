"use strict"
function scroll(elem){
    window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth"
    });
}
let secondPart = document.querySelector('.white_line');
let mapnure = document.querySelector('.map__nure');
let overlay = document.querySelector(".map__nure_overlay");
overlay.addEventListener("click", () =>{
    overlay.classList.add("active");
})

let downArrow = document.querySelector('.buttondown');
downArrow.addEventListener('click',() => {
    scroll(secondPart);
})

let know = document.querySelector('.jsbutton');
know.addEventListener('click',() => {
    window.scrollTo({
        top:mapnure.offsetTop,
        behavior:'smooth'
    });
})
