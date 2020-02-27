const nb = 7;
let inputNb = prompt("Hey! Guess the number !");

if (inputNb < nb) {
    alert("It's more ! Refresh the page to retry.");

    console.log("input is less than nb");
}
else if (inputNb > nb) {
    alert("It's less ! Refresh the page to retry.");

    console.log("input is more than nb");
}
else if (inputNb == nb) {
    alert("You guessed it right ! Bravo!!");

    console.log("input == nb");
}