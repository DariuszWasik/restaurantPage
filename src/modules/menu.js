import './menuStyles.css';
import fish from '../assets/menu/fish.png';
import cheesPickels from '../assets/menu/cheese&pickels.png';
import goosberryTart from '../assets/menu/gooseberryTart.png';
import honeyHam from '../assets/menu/HoneyHam.png';
import lamb from '../assets/menu/lamb.png';
import mushroomPie from '../assets/menu/mushroomPie.png';
import rabbit from '../assets/menu/rabbit.png';
import roastChicken from '../assets/menu/roastChicken.png';
import seedCake from '../assets/menu/seedCake.png';
import stuffedMarrow from '../assets/menu/stuffedMarrow.png';


const hobbitDishes = [
  "Roast Chicken with Herb-Sage Stuffing",
  "Seed-Cake à la Belladonna Took",
  "Lamb and Barley Stew",
  "Stuffed Marrow with Herb-Crusted Topping",
  "Honey-Glazed Ham with Spiced Apple Relish",
  "Poached Trout with Sam’s Garden Greens",
  "Gooseberry Tart with Clotted Cream",
  "Mushroom and Leek Pie",
  "Cheddar and Onion Pasties",
  "Sweet Berry Crumble with Cream"
];

const hobbitDishDescriptions = [
  "Juicy roast chicken with crispy skin, stuffed with a blend of herbs, onions, and breadcrumbs, served with roasted potatoes and gravy.",
  "Delicate cake flavored with aniseed seeds, lightly sweet and aromatic – perfect with afternoon tea in Bag End.",
  "Slow-simmered lamb stew with barley, turnips, carrots, and leeks – hearty and full of flavor.",
  "Mature marrow stuffed with seasoned pork, apple, and onion, baked with a crispy herb crust.",
  "Slices of smoked ham glazed with honey, served with a spiced apple relish made with cloves and cinnamon.",
  "Poached trout in lemon and bay leaf broth, served with herbed butter and fresh greens from Sam’s garden.",
  "Tangy-sweet gooseberry tart in a buttery crust, best served warm with a spoonful of clotted cream.",
  "Golden-baked pie filled with sautéed mushrooms, leeks, and garlic – a dinner table favorite.",
  "Crispy pastry pockets filled with sharp cheddar cheese and caramelized onions, perfect with a mug of ale.",
  "Warm seasonal berry crumble topped with golden streusel, served with sweet cream."
];


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

const container = document.createElement('div');
container.classList.add('container');



content.append(welcome, italicWelcome, para1, container)

}