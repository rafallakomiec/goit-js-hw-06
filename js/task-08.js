'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (form.email.value !== '' && form.password.value !== '') {
    const input = {
      email: form.elements['email'].value,
      password: form.elements['password'].value,
    };
    console.log(input);
    form.reset();
  } else {
    window.alert('Proszę wypełnić wszystkie pola!');
  }
});
