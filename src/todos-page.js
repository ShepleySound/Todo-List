import generateTodoDOM from "./DOM/generate-todo-DOM";
import mainPageMarkup from './DOM/main-page-DOM'
import loadAddTodoPage from "./add-todo";
import projectStorage from "./project-storage"
import Project from "./todo-projects";


const loadMainPage = () => {
    mainPageMarkup()
    const projectHeaders = document.querySelectorAll('.project-container h2')
    projectHeaders.forEach(header => {
        const project = projectStorage.get(header.innerText)
        const todosDiv = document.querySelector(`#${header.innerText.replace(/\s/g, "-")}`)
        project.todos.forEach(todo => {
            todosDiv.append(generateTodoDOM(todo))
        })
    })
    // const myProjectDOM = document.querySelector('#my-project')
    // const myProject = JSON.parse(localStorage.getItem(`myProject`))
    // myProject.todos.forEach(todo => {
    //     myProjectDOM.append(generateTodoDOM(todo))
    // })
    const addTodoButton = document.querySelector('#add-todo-button')
    addTodoButton.addEventListener('click', () => {
        loadAddTodoPage()
    })

    const newProjectButton = document.querySelector('#main-new-project-button')
    newProjectButton.addEventListener('click', () => {
        const newProject = prompt("Name your new project:")
        projectStorage.set(newProject, new Project(newProject))
        loadMainPage()
    })

    const projectContainers = document.querySelectorAll('.project-container')
    projectContainers.forEach(projectContainer => {
        const deleteTodoButtons = projectContainer.querySelectorAll('.todo-delete-button')
        deleteTodoButtons.forEach((deleteButton, i) => {
            deleteButton.addEventListener('click', (e) => {
                const parentProjectContainer = e.target.parentElement.parentElement.parentElement
                const parentProjectTitle = parentProjectContainer.querySelector('h2').innerText
                // const parentElement = e.target.parentElement
                // const parentTodo = parentElement.querySelector(".title").innerText
                const project = projectStorage.get(parentProjectTitle)
                project.removeTodo(i)
                projectStorage.set(project.title, project)
                loadMainPage()
            })
        })
    })

}

export default loadMainPage