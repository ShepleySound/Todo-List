import projectStorage from "../project-storage"
import Project from "../todo-projects"

const mainMarkup = () => {
    const projects = projectStorage.getAllProjectTitles()
    const markup = `
        ${projects.map(project =>
                    `<div class="project-container">
                        <h2>${project}</h2>
                        <div id="${project.replace(/\s/g, "-")}"></div>
                    </div>
                    `).join('')}
        <input type="button" value="Add Todo" id="add-todo-button">
        <input type="button" value="New Project" id="main-new-project-button">
    `
    document.body.innerHTML = markup
}


export default mainMarkup