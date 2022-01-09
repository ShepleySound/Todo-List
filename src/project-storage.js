import Project from "./project-class"

const set = (projectTitle, project) => {
    return localStorage.setItem(projectTitle, JSON.stringify(project))
}
const get = (projectTitle) => {
    let value = localStorage.getItem(projectTitle)
    value = JSON.parse(value)
    const project = Project.fromJSON(value)

    return project
}

const remove = (projectTitle) => {
    localStorage.removeItem(projectTitle)
}

const getAllProjectTitles = () => {
    return Object.keys(localStorage)
}

export default {set, get, remove, getAllProjectTitles}