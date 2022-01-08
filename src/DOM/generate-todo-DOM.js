import Todo from "../todo"

// Generate a DOM representation of a Todo object.

const generateTodoDOM = (Todo) => {
    const container = document.createElement('div')
    container.classList.add('todo')
    
    const checkAndTitleContainer = document.createElement('div')
    checkAndTitleContainer.classList.add('check-and-title')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('todo-complete')
    const title = document.createElement('h3')
    title.classList.add('title')

    checkAndTitleContainer.append(checkbox, title)
    
    const description = document.createElement('p')
    description.classList.add('description')

    title.innerText = Todo.title
    description.innerText = Todo.description

    container.append(checkAndTitleContainer, description)
    return container
}

export default generateTodoDOM