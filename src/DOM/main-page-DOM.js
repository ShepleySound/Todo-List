import projectStorage from "../project-storage"
import Project from "../todo-projects"

const mainMarkup = () => {
    const projects = projectStorage.getAllProjectTitles()
    const markup = `
        ${projects.map(project =>
                    `<div class="project-container">
                        <div class="project-header">
                            <h2 class="project-title">${project}</h2>
                            <input type="button" class="delete-project-button" value="𝗫">
                        </div>
                        <div class="todos-container"></div>
                    </div>
                    `).join('')}
        <input type="button" value="Add Todo" id="add-todo-button">
        <input type="button" value="New Project" id="main-new-project-button">
    `
    document.body.innerHTML = markup
}


export default mainMarkup

// id="${project.replace(/\s/g, "-")}"