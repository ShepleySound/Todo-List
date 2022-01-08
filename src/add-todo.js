import categoryDisplay from "./category-display"
import Todo from "./todo"

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
    checklistDiv.append(checkbox, textBox, addButton)

    

    checklist.append(checklistDiv)
}

// Adds item to page's checklist if completely empty.
if (checklist.innerHTML === '') {
    addChecklistItem()
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = new Todo(form.title.value, 
                             form.description.value, 
                             form.priority.value,
                             dateCheckbox.checked,
                             checklistCheckbox.checked)
    form.clear
    console.log(newTodo)

})

