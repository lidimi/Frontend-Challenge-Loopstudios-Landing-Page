const button = document.querySelector('.ham-menu');
const menu = document.querySelector('nav');
const btnImg = document.querySelector('.btn-burger');


button.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu');
});

