import Project from './project-class';

const set = (projectTitle, project) => {
  localStorage.setItem(projectTitle, JSON.stringify(project));
};
const get = (projectTitle) => {
  const value = localStorage.getItem(projectTitle);
  const parsedValue = JSON.parse(value);
  return Project.fromJSON(parsedValue);
};

const remove = (projectTitle) => {
  localStorage.removeItem(projectTitle);
};

const getAllProjectTitles = () => Object.keys(localStorage);

export default {
  set,
  get,
  remove,
  getAllProjectTitles,
};
