const button = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content"); 
const buttonVisible = document.querySelector(".collapsible__action--visible"); 
const buttonHidden = document.querySelector(".collapsible__action--hidden");

button.addEventListener("click", workWithContent);

document.addEventListener("DOMContentLoaded", firstHideContent);

let isVisible = false;

function workWithContent() {
    isVisible ? hideContent() : showContent();
}

function firstHideContent() {
    buttonVisible.hidden = true;
    buttonHidden.hidden = false;
    content.style.opacity = 0;
}

function animateContent(direction) {
    const animateParams = [
        {transform: 'translate(0, 5px)', opacity: 1 },
        {transform: 'translate(0, -10px)', opacity: 0, offset: .8},
        {transform: 'translate(0, -20px)', opacity: 0}
    ];
    const animateSettings = {  
        duration: 800,
        iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards'
    }
    direction ? animateSettings.direction = direction : null;
    
    content.animate(animateParams, animateSettings);
}

function hideContent() {     
    animateContent();
    isVisible = false;
    buttonVisible.hidden = true;
    buttonHidden.hidden = false;
} 

function showContent() {
    animateContent('reverse');  
    isVisible = true;
    buttonVisible.hidden = false;
    buttonHidden.hidden = true;  
}

//добавим красоты

button.style.width = '155px';