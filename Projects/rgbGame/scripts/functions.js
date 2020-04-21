function init() {
//Setting up listeners on EASY and HARD difficulty
    initDifficultyListeners();

//Setting up listeners on squares
    initSquaresLinsteners();

//Setting up listener on New Colors button
    resetBtn.addEventListener("click", function() {
        reset();
    })

    reset();
}

function initDifficultyListeners() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
    
            reset();
        });  
    }
}

function initSquaresLinsteners() {
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                changeColors(clickedColor);
                message.textContent = "Correct!"
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play again?";
            }
            else {
                this.style.backgroundColor = "#232323"
                message.textContent = "Try again!"
            }
        })
    }
}

function reset() {
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";

    colors = generateRandomColors(numberOfSquares);
    pickedColor = randomPickColor();

    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }

    spanRgbColor.textContent = pickedColor;
    message.textContent = "";
}

function changeColors(color){
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randomPickColor(){
    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red +", " + green + ", " + blue + ")";
}