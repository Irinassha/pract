import localSt from './storage.js';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const user = {};

const onFormChange = ({ target: formField }) => {
  const formFieldValue = formField.value;
  const formFieldName = formField.name;

  user[formFieldName] = formFieldValue;

  localSt.save('feedback-form-state', user);
  //   localStorage.setItem('feedback-form-state', JSON.stringify(user));
};

form.addEventListener('change', onFormChange);

const formFieldFill = () => {
  const userFormInfo = localSt.load('feedback-form-state');
  //   const userFormInfo = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (userFormInfo === undefined) {
    return;
  }

  for (const key in userFormInfo) {
    if (userFormInfo.hasOwnProperty(key)) {
      form.elements[key].value = userFormInfo[key];
        if (userFormInfo[key]) {
            user[key] = userFormInfo[key];
        }
    }
  }
};

formFieldFill();

const formSubmitEl = event => {
  event.preventDefault();

  form.reset();

  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('submit', formSubmitEl);

form.addEventListener('input', throttle(onFormChange, 500));