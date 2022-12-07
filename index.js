const button = document.querySelector('.ham-menu');
const menu = document.querySelector('nav');
const btnImg = document.querySelector('.btn-burger');


button.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu');
    if (btnImg.getAttribute('src') === 'images/icon-hamburger.svg') {
        btnImg.src = 'images/icon-close.svg';
    } else {
        btnImg.src = 'images/icon-hamburger.svg';
    }
});
