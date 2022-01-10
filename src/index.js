import projectStorage from './project-storage';
// eslint-disable-next-line import/no-named-as-default
import Project from './project-class';
import loadMainPage from './view-page/view-page';
import './style.css';

if (localStorage.length === 0) {
  projectStorage.set('Main Project', new Project('Main Project'));
}
loadMainPage();
