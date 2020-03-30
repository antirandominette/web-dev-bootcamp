let dog = {
    speak: function() {
        return "WOOF";
    }
}

let cat = {
    speak: function() {
        return "MIAOU";
    }
}

// keyword this

let comments = {

}

comments.data = ["Good job!", "Bye", "Lame..."];
comments.print = function() {
    this.data.forEach(function(element) {
        console.log(element);
    });
}