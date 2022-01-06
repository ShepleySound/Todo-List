import { todo } from "./todo";
import { dueFormat, dueDistance } from "./due-date"
import translatePriority from './translatePriority'

const printTodo = (todo) => {
    console.log(`Task: ${todo.title}`)
    console.log(`Description: ${todo.description}`)
    console.log(dueDistance(todo.dueDate))
    console.log(`Priority: ${translatePriority(todo.priority)}`)
}

printTodo(todo)