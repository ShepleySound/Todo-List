/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { parseISO } from 'date-fns';
import translatePriority from '../helpers/translatePriority';
import { dueFormat, dueDistance } from '../helpers/due-date';
import projectStorage from '../project-storage';
import loadMainPage from './view-page';
// Generate a DOM representation of a Todo object.

const generateTodo = (todo, index) => {
  const container = document.createElement('div');
  container.classList.add('todo');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('todo-header');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('todo-complete');
  checkbox.checked = todo.complete;
  const title = document.createElement('h3');
  title.style.alignSelf = 'flex-start';
  title.classList.add('title');

  if (todo.complete) {
    title.style.textDecoration = 'line-through';
    title.style.color = '#646464';
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      todo.complete = true;
    } else {
      todo.complete = false;
    }
    const project = projectStorage.get(todo.project);
    project.spliceTodo(index, todo);
    projectStorage.set(todo.project, project);
    loadMainPage();
  });

  const buttons = document.createElement('div');
  buttons.classList.add('todo-header-buttons');
  const deleteButton = document.createElement('span');
  deleteButton.classList.add('todo-delete-button');
  deleteButton.classList.add('material-icons-outlined');
  deleteButton.innerText = 'close';
  const editButton = document.createElement('span');
  editButton.classList.add('todo-edit-button');
  editButton.classList.add('material-icons-outlined');
  editButton.innerHTML = 'edit';
  buttons.append(editButton, deleteButton);
  headerContainer.append(checkbox, title, buttons);

  const priority = document.createElement('div');
  priority.classList.add('priority');

  const description = document.createElement('p');
  description.classList.add('description');

  const checklistContainer = document.createElement('div');
  checklistContainer.classList.add('checklist-container');
  todo.checkList.forEach((check) => {
    const checkContainer = document.createElement('div');
    checkContainer.classList.add('check-container');
    const checklistBox = document.createElement('input');
    checklistBox.type = 'checkbox';
    checklistBox.classList.add('checklist-box');
    checklistBox.checked = check.checked;
    const checklistText = document.createElement('div');
    checklistText.classList.add('checklist-text');
    checklistText.innerText = check.text;
    checkContainer.append(checklistBox, checklistText);
    checklistContainer.append(checkContainer);

    if (check.checked) {
      checklistText.style.textDecoration = 'line-through';
      checklistText.style.color = '#646464';
    }
    checklistBox.addEventListener('change', () => {
      if (checklistBox.checked) {
        check.checked = true;
      } else {
        check.checked = false;
      }
      const project = projectStorage.get(todo.project);
      project.spliceTodo(index, todo);
      projectStorage.set(todo.project, project);

      loadMainPage();
    });
  });

  title.innerText = todo.title;
  description.innerText = todo.description;
  priority.innerText = `Priority: ${translatePriority(todo.priority)}`;
  const date = document.createElement('div');
  date.classList.add('date');
  if (todo.hasDueDate) {
    date.innerText = `${dueFormat(parseISO(todo.dueDate))}
                          ${dueDistance(parseISO(todo.dueDate))}`;
  }

  container.append(headerContainer, description, priority, checklistContainer, date);
  return container;
};

export default generateTodo;
