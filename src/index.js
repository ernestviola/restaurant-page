import './styles.css';
import home from './pages/home.js'
import menu from './pages/menu.js';
import contact from './pages/contact.js';

function changePage(page) {
  // delete everything from content and append the proper page
  const content = document.querySelector('#content');
  content.replaceChildren();
  content.appendChild(page)
}

const homeNav = document.querySelector('#home__nav');
const menuNav = document.querySelector('#menu__nav');
const contactNav = document.querySelector('#contact__nav');

homeNav.addEventListener('click', () => changePage(home));
menuNav.addEventListener('click', () => changePage(menu));
contactNav.addEventListener('click', () => changePage(contact));

changePage(home);