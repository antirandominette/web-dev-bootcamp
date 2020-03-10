window.setTimeout(() => {
    let todos = [];
    let input = prompt("What would you like to do ?");

    while(input !== "quit") {

        if(input === "list") {
            console.log("**********");

            todos.forEach(function(todo, i) {
                console.log(i + ": " + todo);
            });

            console.log("**********\n\n");
        }
        else if(input === "new") {
            let newTodo = prompt("What's the name of this todo");
            todos.push(newTodo);
        }
        else if(input === "delete") {
            
        }

        input = prompt("What would you like to do ?");
    }

    console.log("QUITTING THE APP");
}, 500)

