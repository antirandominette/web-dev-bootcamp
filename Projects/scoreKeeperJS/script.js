const btnPlayer1 = document.querySelector("#player1btn");
const btnPlayer2 = document.querySelector("#player2btn");
const btnReset = document.querySelector("#resetbtn");
const player1ScoreSpan = document.querySelector("#scoreplayer1");
const player2ScoreSpan = document.querySelector("#scoreplayer2");
const limitFixer = document.querySelector("#limitfixer");
const limitScore = document.querySelector("#limitscore");

let player1Score = 0;
let player2Score = 0;
let winningScore;
let gameEnded = false;

btnPlayer1.addEventListener("click", function() {
    if(!gameEnded) {
        player1Score++;
        if(player1Score === winningScore){
            player1ScoreSpan.style.color = "green";
            player2ScoreSpan.style.color = "red";
            gameEnded = true;
        }
        player1ScoreSpan.textContent = player1Score;
    }
});

btnPlayer2.addEventListener("click", function() {
    if(!gameEnded) {
        player2Score++;
        if(player2Score === winningScore){
            player2ScoreSpan.style.color = "green";
            player1ScoreSpan.style.color = "red";
            gameEnded = true;
        }
        player2ScoreSpan.textContent = player2Score;
    }
});

btnReset.addEventListener("click", function() {
    document.location.reload();
});

limitFixer.addEventListener("change", function() {
    winningScore = Number(limitFixer.value);
    limitScore.textContent = winningScore;
});