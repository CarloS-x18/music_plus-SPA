import './sass/app.scss';

// variables 
const btnMenu = document.querySelector('.btn-menu');
const navMobile = document.querySelector('.content-nav');
const bgNav = document.querySelector('.bg-nav');
const btnClose = document.querySelector('.close-btn');

// show nav mobile to click button menu
btnMenu.addEventListener('click', () => {
    navMobile.classList.add('show-nav');
    bgNav.classList.add('show-bg-nav');
});

// remove nav mobile to click button close
btnClose.addEventListener('click', () => {
    navMobile.classList.remove('show-nav');
    bgNav.classList.remove('show-bg-nav');
});