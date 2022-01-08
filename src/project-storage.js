import Todo from "./todo"
import Project from "./todo-projects"

const set = (projectTitle, project) => {
    localStorage.setItem(projectTitle, JSON.stringify(project))
}
const get = (projectTitle) => {
    let value = localStorage.getItem(projectTitle)
    value = JSON.parse(value)
    const project = Object.assign(new Project(projectTitle), value)
    return project
}

const remove = (projectTitle) => {
    localStorage.removeItem(projectTitle)
}

const getAllProjectTitles = () => {
    return Object.keys(localStorage)
}
// localStorage.clear()
// set("Main Project", new Project("Main Project"))

export default {set, get, remove, getAllProjectTitles}