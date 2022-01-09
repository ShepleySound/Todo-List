import loadAddTodoPage from "./add-todo"
import projectStorage from "./project-storage"
import Project from "./todo-projects"
import loadMainPage from "./todos-page"

if (localStorage.length === 0){
    projectStorage.set('Main Project', new Project('Main Project'))
}
loadMainPage()