import './sass/app.scss';
import router from './routes/index.routes';

// variables 
const btnMenu = document.querySelector('.btn-menu');
const navMobile = document.querySelector('.content-nav');
const bgNav = document.querySelector('.bg-nav');
const btnClose = document.querySelector('.close-btn');
const pagesNavMobile = document.querySelectorAll('.link-page-mobile');

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

pagesNavMobile.forEach( page => {
    page.addEventListener('click', e => {
        navMobile.classList.remove('show-nav');
        bgNav.classList.remove('show-bg-nav');
    })
});

// Page in base to route
window.addEventListener('hashchange', () => {
    router(window.location.hash);
})