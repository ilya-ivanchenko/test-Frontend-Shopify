const button = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content"); 
const buttonVisible = document.querySelector(".collapsible__action--visible"); 
const buttonHidden = document.querySelector(".collapsible__action--hidden");

button.addEventListener("click", workWithContent);
document.addEventListener("DOMContentLoaded", hideContent);

function workWithContent() {
    
    if (content.hidden) {
        showContent();
    }
    else {
        hideContent();  
    }
}

function hideContent() {
    content.hidden = true;
    buttonVisible.hidden = true;
    buttonHidden.hidden = false;
} 

function showContent() {
    content.hidden = false;
    buttonVisible.hidden = false;
    buttonHidden.hidden = true;
}

