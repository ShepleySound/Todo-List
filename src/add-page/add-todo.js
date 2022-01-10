/* eslint-disable import/no-cycle */
import categoryDisplay from '../helpers/category-display';
import addPageMarkup from './add-todo-DOM';
import editPageMarkup from './edit-todo-DOM';
import Todo from '../todo-class';
import loadMainPage from '../view-page/view-page';
import storage from '../project-storage';

const loadAddTodoPage = (addEditOption, project, index) => {
  let editMode;
  // eslint-disable-next-line default-case
  switch (addEditOption) {
    case 'add':
      addPageMarkup();
      editMode = false;
      break;
    case 'edit':
      editPageMarkup(project.title);
      editMode = true;
      break;
  }
  const form = document.querySelector('#add-form');
  const dateCheckbox = document.querySelector('#date-checkbox');
  const dateSelector = document.querySelector('#date-selector');
  categoryDisplay(dateCheckbox, dateSelector);
  const checklistCheckbox = document.querySelector('#checklist-checkbox');
  const checklist = document.querySelector('#checklist');
  categoryDisplay(checklistCheckbox, checklist);

  // Adds an item to the page's checklist.
  const addChecklistItem = () => {
    const checklistDiv = document.createElement('div');
    checklistDiv.classList.add('checklist-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checklist-check');
    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.classList.add('checklist-input');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'add-button';
    addButton.innerText = '+';
    addButton.addEventListener('click', () => {
      checklistDiv.removeChild(addButton);
      addChecklistItem();
    });
    const minusButton = document.createElement('button');
    minusButton.type = 'button';
    minusButton.id = 'minus-button';
    minusButton.innerText = '-';
    minusButton.addEventListener('click', () => {
      checklist.removeChild(checklistDiv);
    });
    checklistDiv.append(checkbox, textBox, addButton, minusButton);
    checklist.append(checklistDiv);
    return checklistDiv;
  };

  // Adds item to page's checklist if completely empty.
  checklistCheckbox.addEventListener('change', () => {
    if (checklist.innerHTML === '') {
      addChecklistItem();
    }
  });
  const editPageChanges = () => {
    const todo = project.getTodo(index);
    form.title.value = todo.title;
    form.description.value = todo.description;
    form.priority.value = todo.priority;
    if (todo.hasDueDate) {
      dateCheckbox.checked = true;
      dateSelector.classList.remove('hidden');
      dateSelector.required = true;
    }
    if (todo.hasChecklist) {
      checklistCheckbox.checked = true;
      checklist.classList.remove('hidden');
      let checkDiv;
      let addButton;
      todo.checkList.forEach((check) => {
        if (addButton) {
          checkDiv.removeChild(addButton);
        }
        checkDiv = addChecklistItem();
        addButton = checkDiv.querySelector('#add-button');
        const checkbox = checkDiv.querySelector('.checklist-check');
        const input = checkDiv.querySelector('.checklist-input');
        input.value = check.text;
        checkbox.checked = check.checked;
      });
    }
  };
  if (editMode) {
    editPageChanges();
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let projectTitle;
    if (editMode) {
      projectTitle = project.title;
    } else {
      projectTitle = document.querySelector('#project-selector').value;
      // eslint-disable-next-line no-param-reassign
      project = storage.get(projectTitle);
    }

    const newTodo = new Todo(
      form.title.value,
      form.description.value,
      form.priority.value,
      projectTitle,
      dateCheckbox.checked,
      checklistCheckbox.checked,
    );
    if (newTodo.hasChecklist) {
      const checklistItems = document.querySelectorAll('.checklist-item');
      checklistItems.forEach((item) => {
        const input = item.querySelector('.checklist-input');
        const checkbox = item.querySelector('.checklist-check');
        const checkItem = {
          text: input.value,
          checked: checkbox.checked,
        };
        newTodo.checkList.push(checkItem);
      });
    }
    if (newTodo.hasDueDate) {
      const dueDate = document.querySelector('#due-date');
      newTodo.setDueDate(new Date(dueDate.value));
    }
    if (editMode) {
      project.spliceTodo(index, newTodo);
    } else {
      project.addTodo(newTodo);
    }
    storage.set(projectTitle, project);
    loadMainPage();
  });
  const cancel = document.querySelector('#cancel');
  cancel.addEventListener('click', (e) => {
    e.preventDefault();
    loadMainPage();
  });
};

export default loadAddTodoPage;
