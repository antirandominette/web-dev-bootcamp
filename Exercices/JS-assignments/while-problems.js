console.log("------------------------\n\Problem 1 PRINT BETWEEN -10 AND 19: \n");

let nb = -10

while(nb < 20){
    console.log(nb);
    nb++;
}

console.log("------------------------\n\Problem 2 PRINT EVEN BETWEEN 10 AND 40: \n");

let nb2 = 10;

while(nb2 <= 40){
    if(nb2 % 2 == 0){
        console.log(nb2);
        nb2++;
    }
    else {
        nb2++;
    }
}

console.log("------------------------\n\Problem 3 PRINT ODD BETWEEN 10 AND 40: \n");

let nb3 = 300;

while(nb3 <= 333){
    if(nb3 % 2 === 1){
        console.log(nb3);
        nb3++;
    }
    else {
        nb3++;
    }
}

console.log("------------------------\n\Problem 3 PRINT DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50: \n");

let nb4 = 5;

while(nb4 <= 50){
    if(nb4 % 5 === 0 && nb4 % 3 === 0){
        console.log(nb4);
        nb4++;
    }
    else {
        nb4++;
    }
}