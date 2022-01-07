import Todo from "./todo";
import Project from './todo-projects'
import { dueFormat, dueDistance } from "./due-date"
import translatePriority from './translatePriority'

// Print a Todo (object)
const printTodo = (todo) => {
    console.log(`Task: ${todo.title}`)
    console.log(`Description: ${todo.description}`)
    if (todo.hasDueDate) {
        // console.log(dueDistance(todo.dueDate))
        console.log(dueFormat(todo.dueDate))
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
const todoOne = mainProject.addTodo(new Todo("First Todo", "This is the latest due", 1))
const todoTwo = mainProject.addTodo(new Todo("Second Todo", "This is the earliest due", 2))
const todoThree = mainProject.addTodo(new Todo("Third Todo", "This has no due date", 3))
const todoFour = mainProject.addTodo(new Todo("Fourth Todo", "This is due soon", 2))
const todoFive = mainProject.addTodo(new Todo("Fifth Todo", "This is due soon", 1))
const todoSix = mainProject.addTodo(new Todo("Sixth Todo", "This has no due date", 1))
const todoSeven = mainProject.addTodo(new Todo("Seventh Todo", "This has no due date", 2))
const todoEight = mainProject.addTodo(new Todo("Eighth Todo", "This has no due date", 3))

todoOne.setDueDate(new Date(2023, 1, 1))
todoTwo.setDueDate(new Date(2022, 1, 15))
todoThree.toggleHasDueDate()
todoSix.toggleHasDueDate()
todoSeven.toggleHasDueDate()
todoEight.toggleHasDueDate()
todoFour.setDueDate(new Date(2022, 1, 20))
todoFive.setDueDate(new Date(2022, 1, 24))
mainProject.sortBy.date()

printAllTodos(mainProject)