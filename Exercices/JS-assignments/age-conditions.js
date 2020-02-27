let age = prompt("Hey! How old are you ?");

if (age < 0) {
    alert("Error your age must be positive!!");

    console.log("%cErr negative value", "color: #d9534f");
}

if (age === 21) {
    alert("Happy 21st Birthday!!");

    console.log("%cAge equals 21", "color: #5cb85c");
}

if (age % 2 == 1) {
    alert("Your age is odd!!");

    console.log("%cAge rest is 1 so Odd", "color: #5cb85c");
}

if (age % Math.sqrt(age) === 0) {
    alert("Perfect square!!");

    console.log("%cage is a perfect square", "color: green");
}