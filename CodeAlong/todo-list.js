$(function() {

    let todos = [];
    let input = prompt("What would you like to do ?");

    while(input !== "quit") {

        if(input === "list") {
            console.log(todos);
        }
        else if(input === "new") {
            let newTodo = prompt("What's the name of this todo");
            todos.push(newTodo);
        }

        input = prompt("What would you like to do ?");
    }

    console.log("QUITTING THE APP");
});