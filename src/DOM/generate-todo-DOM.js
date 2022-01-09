import translatePriority from "../translatePriority"
import {dueFormat, dueDistance} from "../due-date"
import { parseISO } from "date-fns"
// Generate a DOM representation of a Todo object.

const generateTodoDOM = (todo) => {

    const container = document.createElement('div')
    container.classList.add('todo')
    
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('todo-header')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('todo-complete')
    const title = document.createElement('h3')
    title.style.alignSelf = 'flex-start'
    title.classList.add('title')
    const buttons = document.createElement('div')
    buttons.classList.add('todo-header-buttons')
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('todo-delete-button')
    deleteButton.innerText = '𝗫'
    const editButton = document.createElement('button')
    editButton.classList.add('todo-edit-button')
    editButton.innerText = 'O'
    buttons.append(editButton, deleteButton)
    headerContainer.append(checkbox, title, buttons)

    const priority = document.createElement('div')
    priority.classList.add('priority')
    
    const description = document.createElement('p')
    description.classList.add('description')
    
    const checklistContainer = document.createElement('div')
    checklistContainer.classList.add('checklist-container')
    todo.checkList.forEach(check => {
        const checkContainer = document.createElement('div')
        checkContainer.classList.add('check-container')
        const checklistBox = document.createElement('input')
        checklistBox.type = 'checkbox'
        checklistBox.classList.add('checklist-box')
        const checklistText = document.createElement('div')
        checklistText.classList.add('checklist-text')
        checklistText.innerText = check
        checkContainer.append(checklistBox, checklistText)
        checklistContainer.append(checkContainer)
    })


    title.innerText = todo.title
    description.innerText = todo.description
    priority.innerText = `Priority: ${translatePriority(todo.priority)}`
    const date = document.createElement('div')
    date.classList.add('date')
    if (todo.hasDueDate){
        date.innerText = `${dueFormat(parseISO(todo.dueDate))}
                          ${dueDistance(parseISO(todo.dueDate))}`
    }


    container.append(headerContainer, description, priority, checklistContainer, date)
    return container
}

export default generateTodoDOM