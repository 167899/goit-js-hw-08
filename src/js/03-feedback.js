import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let email = '';
let massage = '';
let setStorageObj = {};

form.addEventListener(
  'input',
  throttle(() => {
    email = form.elements.email.value;
    massage = form.elements.message.value;
    setStorageObj = {
      email,
      massage,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(setStorageObj));
  }, 500),
);

setStorageObj = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.elements.email.value = setStorageObj.email || '';
form.elements.message.value = setStorageObj.massage || '';

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Все поля должны быть заполнены!');
  } else {
    form.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(setStorageObj);
  }
});
