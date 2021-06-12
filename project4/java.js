let slides=document.querySelectorAll("figure");

let prev=document.querySelector('#prev');
let next=document.querySelector('#next');

let i=0;

next.addEventListener("clik", () => {
    slides[i].className = "";
    i++;
    if (i >= slides.length) i = 0;
    slides[i].className = "show";

}); 

prev.addEventListener("clik", () => {
    slides[i].className = "";
    i--;
    if (i < 0) i = slides.length - 1;
    slides[i].className = "show";

});