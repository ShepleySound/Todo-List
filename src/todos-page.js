import generateTodoDOM from "./DOM/generate-todo-DOM";
console.log(localStorage.getItem("currentProject"))
generateTodoDOM(localStorage.getItem("currentProject"))