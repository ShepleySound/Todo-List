import categoryDisplay from "./category-display"
import addPageMarkup from './DOM/add-todo-DOM'
import Todo from "./todo"
import Project from "./todo-projects"
import loadMainPage from "./todos-page"
import storage from "./project-storage"

const loadAddTodoPage = () => {
    addPageMarkup()
    const form = document.querySelector('#add-form')
    const dateCheckbox = document.querySelector('#date-checkbox')
    const dateSelector = document.querySelector('#date-selector')
    categoryDisplay(dateCheckbox, dateSelector)
    const checklistCheckbox = document.querySelector('#checklist-checkbox')
    const checklist = document.querySelector('#checklist')
    categoryDisplay(checklistCheckbox, checklist)

    // Adds an item to the page's checklist.
    const addChecklistItem = () => {
        const checklistDiv = document.createElement('div')
        checklistDiv.classList.add('checklist-item')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checklist-check')
        const textBox = document.createElement('input')
        textBox.type = 'text'
        textBox.classList.add('checklist-input')
        const addButton = document.createElement('button')
        addButton.type = 'button'
        addButton.id = 'add-button'
        addButton.innerText = "+"
        addButton.addEventListener('click', (e) => {
            checklistDiv.removeChild(addButton)
            addChecklistItem()
        })
        const minusButton = document.createElement('button')
        minusButton.type = 'button'
        minusButton.id = 'minus-button'
        minusButton.innerText = "-"
        minusButton.addEventListener('click', (e) => {
            checklist.removeChild(checklistDiv)
        })
        checklistDiv.append(checkbox, textBox, addButton, minusButton)
        checklist.append(checklistDiv)
    }

    // Adds item to page's checklist if completely empty.
    checklistCheckbox.addEventListener('change', () => {
        if (checklist.innerHTML === '') {
            addChecklistItem()
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const projectTitle = document.querySelector('#project-selector').value
        const project = storage.get(projectTitle)
        console.log(storage.get(projectTitle))
        const newTodo = new Todo(form.title.value, 
                                 form.description.value, 
                                 form.priority.value,
                                 dateCheckbox.checked,
                                 checklistCheckbox.checked)
        if (newTodo.hasChecklist){
            const checklistInputs = document.querySelectorAll('.checklist-input')
            checklistInputs.forEach(item => {
                newTodo.checkList.push(item.value)
            })
        }
        if (newTodo.hasDueDate){
            const dueDate = document.querySelector("#due-date")
            newTodo.setDueDate(new Date(dueDate.value))
        }
        project.addTodo(newTodo)
        storage.set(projectTitle, project)
        loadMainPage()
    })
    const cancel = document.querySelector('#cancel')
    cancel.addEventListener('click', () => {
        loadMainPage()
    })    
}


export default loadAddTodoPage