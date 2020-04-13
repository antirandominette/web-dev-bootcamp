const button = document.querySelector("button");
const body = document.querySelector("body");
let isBlack = true;

button.addEventListener("click", changeBodyColor);

function changeBodyColor() {
    if(isBlack) {
        body.style.background = "purple";
    }
    else {
        body.style.background = "black";
    }
    isBlack = !isBlack;
}