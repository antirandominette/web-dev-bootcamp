let nb = 1;

console.log("------------------------\n\nWhile ex 1: \n");

while (nb <= 10) {
    console.log(nb);
    nb += 2;
}

console.log("------------------------\n\nWhile ex 2: \n");

let nb2 = 1;

while (nb2 <= 20) {
    if (nb2 % 4 === 0) {
        console.log(nb2);
    }
    nb2++;
}

console.log("------------------------\n\nWhile ex 3: \n");

let nb3 = 100;

while (nb3 < 150 && nb3 >= 0) {
    console.log(nb3 + 1);
    nb3--;
}