import './index.html';
import './index.scss';
import code from './img/code.png'
import { mult, sum } from './modules/calc';

let button = document.querySelector('.header__menu-link');
let menu = document.querySelector('.menu');
button.onclick = () => {
   menu.classList.toggle('menu--active');
}