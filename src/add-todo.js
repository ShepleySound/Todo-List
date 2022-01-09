import categoryDisplay from "./category-display"
import addPageMarkup from './DOM/add-todo-DOM'
import editPageMarkup from "./DOM/edit-todo-DOM"
import Todo from "./todo"
import Project from "./todo-projects"
import loadMainPage from "./todos-page"
import storage from "./project-storage"
import parseISO from "date-fns/parseISO"


const loadAddTodoPage = (addEditOption, project, index) => {
    let editMode
    switch (addEditOption) {
        case 'add':
            addPageMarkup()
            editMode = false
            break
        case 'edit':
            editPageMarkup(project.title)
            editMode = true
            break
    }
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
        return checklistDiv
    }

    // Adds item to page's checklist if completely empty.
    checklistCheckbox.addEventListener('change', () => {
        if (checklist.innerHTML === '') {
            addChecklistItem()
        }
    })
    const editPageChanges = () => {
        const todo = project.getTodo(index)
        form.title.value = todo.title
        form.description.value = todo.description
        form.priority.value = todo.priority
        if (todo.hasDueDate){
            dateCheckbox.checked = true
            dateSelector.classList.remove('hidden')
            dateSelector.required = true
        }
        if (todo.hasChecklist){
            checklistCheckbox.checked = true
            checklist.classList.remove('hidden')
            let checkDiv
            let addButton
            todo.checkList.forEach(check => {
                if (addButton){
                    checkDiv.removeChild(addButton)
                }
                checkDiv = addChecklistItem()
                addButton = checkDiv.querySelector('#add-button')
                let input = checkDiv.querySelector('.checklist-input')
            })
        }

    }
    if (editMode){
        editPageChanges()
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let projectTitle
        if (editMode) {
            projectTitle = project.title        }
        else {
            projectTitle = document.querySelector('#project-selector').value
            console.log(projectTitle)
            project = storage.get(projectTitle)
        }
        // const projectTitle = document.querySelector('#project-selector').value
        // const project = storage.get(projectTitle)
        // console.log(storage.get(projectTitle))
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
            console.log(dueDate.value)
            console.log(parseISO(dueDate.value))
            newTodo.setDueDate(new Date(dueDate.value))
        }
        if (editMode){
            project.editTodo(index, newTodo)
        }
        else {
            project.addTodo(newTodo)
        }
        storage.set(projectTitle, project)
        loadMainPage()
    })
    const cancel = document.querySelector('#cancel')
    cancel.addEventListener('click', (e) => {
        e.preventDefault()
        loadMainPage()
    })    
}


export default loadAddTodoPage