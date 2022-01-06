import Todo from "./todo";
import Project from './todo-projects'
import { dueFormat, dueDistance } from "./due-date"
import translatePriority from './translatePriority'

// Print a Todo (object)
const printTodo = (todo) => {
    console.log(`Task: ${todo.title}`)
    console.log(`Description: ${todo.description}`)
    if (todo.hasDueDate) {
        console.log(dueDistance(todo.dueDate))
    }
    console.log(`Priority: ${translatePriority(todo.priority)}`)
    if (todo.checkList.length != 0) {
        console.log("Checklist:")
        todo.checkList.forEach((item, index) => {
            console.log(`${index} ${item}`)
        });
    }
}

// Print all todos from a single Project (object).
const printAllTodos = (project) => {
    project.todos.forEach(todo => printTodo(todo))
}

const mainProject = new Project("Main")

printAllTodos(mainProject)