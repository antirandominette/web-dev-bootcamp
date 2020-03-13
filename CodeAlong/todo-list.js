window.setTimeout(() => {
    let todos = [];
    let input = prompt("What would you like to do ?");

    function createTodo() {
        let newTodo = prompt("What's the name of this todo");
        todos.push(newTodo);
        console.log(`Added ${newTodo} entry!`);
    }

    function deleteTodo() {
        let index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        alert(`Todo ${index} deleted!`);
        console.log(`Deleted ${index} entry!`);
    }

    function listTodo() {
        console.log("**********");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********\n\n");
    }

    while(input !== "quit") {
        if(input === "list") {
            listTodo();
        }
        else if(input === "new") {
            createTodo();
        }
        else if(input === "delete") {
            deleteTodo();
        }

        input = prompt("What would you like to do ?");
    }

    console.log("QUITTING THE APP");
}, 500);