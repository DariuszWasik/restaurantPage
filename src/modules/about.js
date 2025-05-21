import './aboutStyles.css'


import ania from '../assets/about/ania.png'
import tadeusz from '../assets/about/Tadeusz.png'
import lucja from '../assets/about/Lucja.png'
import map from '../assets/about/map.png'

export function displayAbout() {

const content = document.querySelector('#content');
content.innerHTML = '';

const welcome = document.createElement('h2');
welcome.classList.add('welcome');
welcome.innerText = 'Meet Our Chefs';

const italicWelcome = document.createElement('h4');
italicWelcome.classList.add('italicWelcome');
italicWelcome.innerText = "From hearth to heart, with every bite."

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.innerText = 'At The Hobbit Inn, our kitchen is the heart of our home — and at the heart of the kitchen are our beloved chefs: Ania Boffin, Lucja Mugwort, and Tadeusz Proudfoot. Each of them brings their own flavor of warmth, whimsy, and woodland wisdom to every meal.'

const container2 = document.createElement('div');
container2.classList.add('container2');

const aniaImg = document.createElement('img')
aniaImg.src = ania;
const lucjaImg = document.createElement('img')
lucjaImg.src = lucja;
const tadeuszImg = document.createElement('img')
tadeuszImg.src = tadeusz;


container2.append(aniaImg, lucjaImg, tadeuszImg)

const paraA = document.createElement('p');
paraA.classList.add('paraA');
paraA.innerText = 'Ania Boffin – The Gentle Alchemist\n With her thoughtful eyes and golden locks, Ania Boffin has a knack for harmony — balancing sweet and savory with the ease of a true hearth wizard. Her seed-cake is the talk of the village, and her herbal teas are known to soothe even the most tangled nerves.'
const paraB = document.createElement('p');
paraB.classList.add('paraA');
paraB.innerText = 'Lucja Mugworth – The Forest Forager\n Lucja is as wild-hearted as the woodlands where she gathers her secret ingredients. From berry-glazed pies to wild mushroom stew, her creations taste of dapple'
const paraC = document.createElement('p');
paraC.classList.add('paraA');
paraC.innerText = ' Tadeusz Proudfoot – The Young Firekeeper\n Though the youngest in our trio, Tadeusz tends the hearth with skill far beyond his years. His roast chicken is crisped to perfection, and no one stokes a cooking fire like he does. When not cooking, he’s often found foraging or daydreaming beside the ale barrels.'

const findUs = document.createElement('h2');
findUs.classList.add('welcome');
findUs.innerText = 'How to find us?';

const mapImg = document.createElement('img');
mapImg.src = map;
mapImg.classList.add('map')

const address = document.createElement('h4');
address.innerText = "The Shire Inn\nUnderhill Lane, Bywater Hollow\nWestfarthing, The Shire\nMiddle-earth, 1420 S.R."
address.classList.add('address');

content.append(welcome, italicWelcome, para1, container2, paraA, paraB, paraC, findUs, mapImg, address);
}