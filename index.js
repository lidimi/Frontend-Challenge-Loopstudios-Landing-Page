const button = document.querySelector('.ham-menu');
const menu = document.querySelector('nav');
const ul = document.querySelector('ul');
const btnImg = document.querySelector('.btn-burger');


button.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu');
});

