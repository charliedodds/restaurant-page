import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

homePage.load();

const homeBtn = document.getElementById('home-btn');

const menuBtn = document.getElementById('menu-btn');

const contactBtn = document.getElementById('contact-btn');

const allBtns = document.querySelectorAll('.nav-btn');

const handleClick = (e) => {
  allBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');
};

allBtns.forEach((btn) => btn.addEventListener('click', handleClick));

homeBtn.addEventListener('click', homePage.load);

menuBtn.addEventListener('click', menuPage.load);

contactBtn.addEventListener('click', contactPage.load);
