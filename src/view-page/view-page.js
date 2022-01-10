/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import generateTodo from './generate-todo';
import mainPageMarkup from './main-page-DOM';
import loadAddTodoPage from '../add-page/add-todo';
import projectStorage from '../project-storage';
import Project from '../project-class';

const loadMainPage = () => {
  mainPageMarkup();
  const projectHeaders = document.querySelectorAll('.project-container h2');
  projectHeaders.forEach((header) => {
    const project = projectStorage.get(header.innerText);

    // const todosDiv = document.querySelector(`#${header.innerText.replace(/\s/g, "-")}`)
    const projectContainer = header.parentElement.parentElement;
    const todosDiv = projectContainer.querySelector('.todos-container');

    const todos = project.getAllTodos();
    todos.forEach((todo, index) => {
      todosDiv.append(generateTodo(todo, index));
    });
  });

  // Button for adding new todo.
  const addTodoButton = document.querySelector('#add-todo-button');
  addTodoButton.addEventListener('click', () => {
    loadAddTodoPage('add');
  });
  // Button for adding new projects
  const newProjectButton = document.querySelector('#main-new-project-button');
  newProjectButton.addEventListener('click', () => {
    let newProject = prompt('Name your new project:');
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (newProject === null) {
        return;
      }
      if (newProject.length === 0) {
        newProject = prompt('Please enter a name for your project:');
      }
      if (newProject.length > 40) {
        newProject = prompt('Project name must be under 40 characters.');
      }
      if (newProject) {
        projectStorage.set(newProject, new Project(newProject));
        loadMainPage();
        return;
      }
    }
  });

  // Button for editing project title
  const editProjectButtons = document.querySelectorAll('.edit-project-button');
  editProjectButtons.forEach((editButton) => {
    editButton.addEventListener('click', function editClick() {
      const parent = editButton.parentElement.parentElement;
      const projectTitleElement = parent.querySelector('.project-title');
      const projectTitle = projectTitleElement.innerText;

      const titleInput = document.createElement('input');
      titleInput.classList.add('project-title-edit-text');
      titleInput.type = 'text';
      titleInput.value = projectTitle;
      titleInput.maxLength = '40';
      projectTitleElement.replaceWith(titleInput);
      titleInput.focus();
      const project = projectStorage.get(projectTitle);

      const submitTitle = () => {
        if (titleInput.value !== projectTitle) {
          project.editTitle(titleInput.value);
          projectStorage.set(project.title, project);
          projectStorage.remove(projectTitle);
        }

        projectTitleElement.innerText = project.title;
        titleInput.replaceWith(projectTitleElement);
      };

      const submitClick = () => {
        submitTitle();
        editButton.removeEventListener('click', submitClick);
        editButton.addEventListener('click', editClick);
      };

      editButton.removeEventListener('click', editClick);

      editButton.addEventListener('click', submitClick);

      titleInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
          submitTitle();
          editButton.addEventListener('click', editClick);
          editButton.removeEventListener('click', submitClick);
        }
      });
    });
  });

  // Button for deleting project
  const deleteProjectButtons = document.querySelectorAll('.delete-project-button');
  deleteProjectButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
      const parent = deleteButton.parentElement.parentElement;
      const projectTitle = parent.querySelector('.project-title').innerText;
      if (localStorage.length === 1) {
        alert('Cannot delete last remaining project.');
        return;
      }
      if (confirm(`Delete ${projectTitle}?`)) {
        projectStorage.remove(projectTitle);
        loadMainPage();
      }
    });
  });

  const projectContainers = document.querySelectorAll('.project-container');
  // Loop through all projects
  projectContainers.forEach((projectContainer) => {
    // Loop through all edit buttons in project
    const editTodoButtons = projectContainer.querySelectorAll('.todo-edit-button');
    editTodoButtons.forEach((editButton, index) => {
      editButton.addEventListener('click', (e) => {
        const parentProjectContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        const parentProjectTitle = parentProjectContainer.querySelector('h2').innerText;
        const project = projectStorage.get(parentProjectTitle);
        loadAddTodoPage('edit', project, index);
      });
    });
    // Loop through all delete buttons in project
    const deleteTodoButtons = projectContainer.querySelectorAll('.todo-delete-button');
    deleteTodoButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', (e) => {
        const parentProjectContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        const parentProjectTitle = parentProjectContainer.querySelector('h2').innerText;
        const project = projectStorage.get(parentProjectTitle);
        // Remove from Project object.
        project.removeTodo(index);
        // Save to projectStorage.
        projectStorage.set(project.title, project);
        // Repaint page.
        loadMainPage();
      });
    });
  });
};

export default loadMainPage;
