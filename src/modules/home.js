

import './homeStyles.css'
import shireInnImg from '../assets/home/shireinn.jpg'
import fireplaceImg from '/home/dariolysy/repos/restaurantPage/src/assets/home/fireplace.jpg'


const content = document.querySelector('#content');
const welcome = document.createElement('h2');
welcome.classList.add('welcome');
welcome.innerText = 'Welcome to The Shire Inn';

const italicWelcome = document.createElement('h4');
italicWelcome.classList.add('italicWelcome');
italicWelcome.innerText = 'Where Every Meal Feels Like Home';

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.innerText = 'Step into a world of comfort, cheer, and second breakfasts. Nestled in the heart of the Shire, our cozy inn serves up hearty meals, warm hearths, and hobbit-sized hospitality. Whether you\'re here for elevenses, supper, or just a good tale by the fire, you\'re always among friends.'

const para2 = document.createElement('p');
para2.classList.add('para2');
para2.innerText = 'Pull up a chair, fill your plate, and stay a while — there’s always room at our table.'

const imgDiv = document.createElement('div');
imgDiv.classList.add('imgDiv');

const img1 =document.createElement('img');
img1.id = 'shireInn';
img1.src = shireInnImg;
img1.alt = 'a hobbit-style restaurant with hobbits sitting outside and having a meal'

const img2 =document.createElement('img');
img2.id = 'fireplace';
img2.src = fireplaceImg;
img2.alt = 'fireplace with hobbits around, they eat, drink and have fun'


imgDiv.append(img1, img2);

content.append(welcome, italicWelcome, para1, para2, imgDiv,);
