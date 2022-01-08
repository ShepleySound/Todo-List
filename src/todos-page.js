import generateTodoDOM from "./DOM/generate-todo-DOM";
import mainPageMarkup from './DOM/main-page-DOM'
import loadAddTodoPage from "./add-todo";

const loadMainPage = () => {
    mainPageMarkup()
    const myProjectDOM = document.querySelector('#my-project')
    const myProject = JSON.parse(localStorage.getItem(`myProject`))
    myProject.todos.forEach(todo => {
        myProjectDOM.append(generateTodoDOM(todo))
        console.log(todo)
    })
    const addTodoButton = document.querySelector('#add-todo-button')
    addTodoButton.addEventListener('click', () => {
        loadAddTodoPage()
    })
}

export default loadMainPage