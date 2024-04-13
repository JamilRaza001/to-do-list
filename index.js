#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "Select",
                message: "Select a option",
                choices: ["Add", "Delete", "Update", "View"],
            },
        ]);
        if (ans.Select === "Add") {
            let AddToDo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Enter the items in the list",
            });
            todos.push(AddToDo.todo);
            todos.forEach((todo) => console.log(todo));
        }
        else if (ans.Select === "Update") {
            let UpdateToDo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update the items in the list",
                choices: todos.map((item) => item),
            });
            let AddToDo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Enter the items in the list",
            });
            let NewAddToDo = todos.filter((val) => val !== UpdateToDo.todo);
            todos = [...NewAddToDo, AddToDo.todo];
            todos.forEach(todo => console.log(todo));
        }
        else if (ans.Select === "Delete") {
            let DeleteToDo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update the items in the list",
                choices: todos.map((item) => item),
            });
            let NewAddToDo = todos.filter((val) => val !== DeleteToDo.todo);
            todos = [...NewAddToDo];
            todos.forEach(todo => console.log(todo));
        }
        else if (ans.Select === "View") {
            console.log("*** To DO List ***");
            todos.forEach(todo => console.log(todo));
        }
    } while (true);
}
createTodo(todos);
