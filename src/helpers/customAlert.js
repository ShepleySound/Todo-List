import './customAlert.css';

const customAlert = (alertString) => {
  const alertContainer = document.createElement('div');
  const alertText = document.createElement('p');
  alertContainer.id = 'alert-container';
  alertText.id = 'alert-text';
  alertText.innerText = alertString;
  alertContainer.append(alertText);
  document.body.append(alertContainer);

  setTimeout(() => alertContainer.classList.add('display'), 10);
  setTimeout(() => alertContainer.classList.remove('display'), 2000);
  setTimeout(() => document.body.removeChild(alertContainer), 3000);
  // setTimeout();
};

export default customAlert;
