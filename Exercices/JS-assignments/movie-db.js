let movieDB = [{
    title: "Paradise PD",
    ratings: ["'Great show!'", " 'Kinda boring'"],
    stars: "3 stars",
    hasSeen: true
},

{
    title: "Batman The Dark Knight",
    ratings: ["'Amazing'", " 'Wtf, cross a desert in 20min???'"],
    stars: "4 stars",
    hasSeen: false
},

{
    title: "Harry Potter 1",
    ratings: ["'I hate HP omg'", " 'C'est nuuuuuul'"],
    stars: "1 stars",
    hasSeen: true
},

{
    title: "The lord of the rings",
    ratings: ["'Best movie ever'", " 'Wow!'"],
    stars: "5 stars",
    hasSeen: true
}];

for(let i = 0; i < movieDB.length; i++) {
    if(movieDB[i].hasSeen === true) {
        console.log(`%c You have seen 🤴: ${movieDB[i].title} -- ${movieDB[i].stars} \n\nHere are some comments about the movie : ${movieDB[i].ratings}`, "background: green; color: white; font-size: 1.1rem");
        console.log('\n')
    }
    else if (movieDB[i].hasSeen === false) {
        console.log(`%c You have NOT seen 🕵️‍♂️ : "${movieDB[i].title}" -- ${movieDB[i].stars} \n\nHere are some comments about the movie : ${movieDB[i].ratings}`, "background: red; color: white; font-size: 1.1rem");
        console.log('\n')
    }
};