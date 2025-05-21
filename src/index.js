import './styles.css'
import { displayHome } from './modules/home' 
import { displayMenu } from './modules/menu';
import { displayAbout } from './modules/about';

displayHome();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');

homeBtn.addEventListener('click', displayHome);
menuBtn.addEventListener('click', displayMenu);
aboutBtn.addEventListener('click', displayAbout);