const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconeClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
 wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');
});

iconeClose.addEventListener('click', ()=> {
wrapper.classList.remove('active-popup');
});