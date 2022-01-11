/* eslint-disable no-param-reassign */
import getNextSiblings from './get-next-siblings';

const pageTransition = (loadFunction) => {
  document.body.classList.add('fade');
  setTimeout(() => {
    document.body.classList.remove('fade');
    loadFunction();
  }, 100);
};

const todoDeleteTransition = (todoContainer, loadFunction) => {
  const containerHeight = todoContainer.offsetHeight;
  todoContainer.classList.add('fade');

  const nextTodoSiblings = getNextSiblings(todoContainer, 'todo');
  nextTodoSiblings.forEach((sibling) => {
    sibling.style.transform = `translateY(-${containerHeight}px)`;
  });
  const projectContainer = todoContainer.closest('.project-container');
  const nextProjectSiblings = getNextSiblings(
    projectContainer,
    'project-container',
  );

  nextProjectSiblings.forEach((sibling) => {
    sibling.style.transform = `translateY(-${containerHeight}px)`;
  });

  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach((navButton) => {
    navButton.style.transform = `translateY(-${containerHeight}px)`;
  });
  setTimeout(() => {
    loadFunction();
  }, 200);
};

export { pageTransition, todoDeleteTransition };
