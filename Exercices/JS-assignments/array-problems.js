function printReverse(array) {
    let i;

    i = array.length - 1;
    while(i >= 0) {
        console.log(array[i]);
        i--;
    }
}

function isUniform(array) {
    console.log([...new Set(array)].length === 1 ? true : false);
}

function sumArray(array) {
    let sum;

    sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function max(array) {
    array.sort((a, b) => a - b);

    return array[array.length - 1];
}