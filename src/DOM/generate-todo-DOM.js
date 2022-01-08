import translatePriority from "../translatePriority"
import {dueFormat, dueDistance} from "../due-date"
import { parseISO } from "date-fns"
// Generate a DOM representation of a Todo object.

const generateTodoDOM = (todo) => {

    const container = document.createElement('div')
    container.classList.add('todo')
    
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('check-and-title')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('todo-complete')
    const title = document.createElement('h3')
    title.style.alignSelf = 'flex-start'
    title.classList.add('title')
    const priority = document.createElement('div')
    priority.classList.add('priority')
    priority.style.marginLeft = 'auto'

    headerContainer.append(checkbox, title, priority)
    
    const description = document.createElement('p')
    description.classList.add('description')
    

    title.innerText = todo.title
    description.innerText = todo.description
    priority.innerText = `Priority
                          ${translatePriority(todo.priority)}`
    
    const date = document.createElement('div')
    date.classList.add('date')
    if (todo.hasDueDate){
        date.innerText = `${dueFormat(parseISO(todo.dueDate))}
                          ${dueDistance(parseISO(todo.dueDate))}`
    }


    container.append(headerContainer, description, date)
    return container
}

export default generateTodoDOM