import './menuStyles.css'

export function displayMenu() {

const content = document.querySelector('#content');
content.innerHTML = '';

const welcome = document.createElement('h2');
welcome.classList.add('welcome');
welcome.innerText = 'The Shire Inn Menu';

const italicWelcome = document.createElement('h4');
italicWelcome.classList.add('italicWelcome');
italicWelcome.innerText = 'From first breakfast to supper, every bite is a comfort.'

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.innerText = 'Dig in and discover the simple joys of hobbit-made fare—fresh from the garden, baked with love, and served with a smile.'



content.append(welcome, italicWelcome, para1)

}