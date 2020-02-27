var inputQuestion = prompt("Are we there yet ?");

while(inputQuestion.indexOf("yes") === -1) {
    var inputQuestion = prompt("Are we there yet ?");
}

alert("Yay, we made it!");