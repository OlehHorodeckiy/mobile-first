
const button = document.querySelector('.header__burger');
const menu =document.querySelector('.mobile-menu')
button.addEventListener('click', event => {
    menu.classList.toggle('active');
});