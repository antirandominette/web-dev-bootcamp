function average(notes) {
    sum = 0;
    len = notes.length;
    for(i = 0; i < len; i++) {
        sum = sum + notes[i];
    }

    console.log(Math.round(sum / len));
}

average([90, 98, 89, 100, 100, 86, 94]);
average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]);