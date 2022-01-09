import projectStorage from "../project-storage"

const mainMarkup = () => {
    const projects = projectStorage.getAllProjectTitles()
    const markup = `
        ${projects.map(project =>
                    `<div class="project-container">
                        <div class="project-header">
                            <h2 class="project-title">${project}</h2>
                            <div class="project-header-buttons">
                                <span class="edit-project-button material-icons-outlined">edit</span>
                                <span class="delete-project-button material-icons-outlined">close</span>
                            </div>
                        </div>
                        <div class="todos-container"></div>
                    </div>
                    `).join('')}
        <input type="button" value="Add Todo" id="add-todo-button" class="nav-button">
        <input type="button" value="New Project" id="main-new-project-button" class="nav-button">
    `
    document.body.innerHTML = markup
}


export default mainMarkup