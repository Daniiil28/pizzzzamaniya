

const input = document.querySelector(`.theme-input input`);
input.addEventListener(`change`, (event) => {
    const isChecked = event.target.checked;
    if(isChecked){
        document.querySelector(`html`).setAttribute(`data-theme`, `dark`)
        localStorage.setItem(`theme`, `dark`);
        
    }
    else{
        document.querySelector(`html`).setAttribute(`data-theme`, `light`)
        localStorage.setItem(`theme`, `light`);
        
    }
});
window.addEventListener(`load`, () =>{
    const theme = localStorage.getItem(`theme`);
    if(theme === `dark`) {
        input.checked = true;
        document.querySelector(`html`).setAttribute(`data-theme`, `dark`)
    }
});

const slideimg = document.querySelectorAll(".slide");
let currentSlider = 0;
let sliderCount = slideimg.length;
const buttonNext = document.querySelector(".carousel-next");
const buttonPrevious = document.querySelector(".carousel-previous");




buttonNext.addEventListener("click", () => {
    if(currentSlider < sliderCount){
        currentSlider++;
    if(currentSlider === sliderCount) currentSlider = 0;
        slideimg.forEach((slide) => {
            slide.style.transform = `translateX(-${100 * currentSlider}%)`;
            
        });
    }
 
})


buttonPrevious.addEventListener("click", () => {
    if(currentSlider < sliderCount){
        currentSlider--;
    if(currentSlider < 0) currentSlider=0;
        slideimg.forEach((slide) =>{
            slide.style.transform = `translateX(-${100 * currentSlider}%)`;
        });
    }
})

let timerid = setTimeout(function tick() {
    if(currentSlider < sliderCount) {
        currentSlider++;
    if(currentSlider === sliderCount) currentSlider = 0;
    slideimg.forEach((slide) =>{
        slide.style.transform = `translateX(-${100 * currentSlider}%)`;
    }); 
    }
timerid = setTimeout(tick,3000);
});


divSunMoon.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink'; 
  };
divSunMoon.onmouseout = function(event) {
    let target = event.target;
    target.style.background = ''; 
  };
divCarouselPrevious.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink'; 
  };
divCarouselPrevious.onmouseout = function(event) {
    let target = event.target;
    target.style.background = ''; 
  };
divCarouselNext.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink'; 
  };
divCarouselNext.onmouseout = function(event) {
    let target = event.target;
    target.style.background = ''; 
  };


//20.07.2022
