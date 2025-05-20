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
  "Cheese & Pickles",
  "Roast Chicken with Herb-Sage Stuffing",
  "Seed-Cake à la Belladonna Took",
  "Lamb and Barley Stew",
  "Stuffed Marrow with Herb-Crusted Topping",
  "Honey-Glazed Ham with Spiced Apple Relish",
  "Poached Trout with Sam’s Garden Greens",
  "Gooseberry Tart with Clotted Cream",
  "Mushroom and Leek Pie",
  "Braised Rabbit with Ale-Gravy"
];

const imgDishes = [
    cheesPickels, 
    roastChicken, 
    seedCake, 
    lamb, 
    stuffedMarrow, 
    honeyHam, 
    fish, 
    goosberryTart, 
    mushroomPie, 
    rabbit
];


const dishDescriptions = [
  "A generous serving of creamy, cave-aged Hobbiton cheese, sliced thick and paired with a bowl of crisp, brine-cured pickles from Gamwich Gardens. A tangy, satisfying bite perfect for elevenses or a light supper beside the hearth.",
  "Juicy roast chicken with crispy skin, stuffed with a blend of herbs, onions, and breadcrumbs, served with roasted potatoes and gravy.",
  "Delicate cake flavored with aniseed seeds, lightly sweet and aromatic – perfect with afternoon tea in Bag End.",
  "Slow-simmered lamb stew with barley, turnips, carrots, and leeks – hearty and full of flavor.",
  "Mature marrow stuffed with seasoned pork, apple, and onion, baked with a crispy herb crust.",
  "Slices of smoked ham glazed with honey, served with a spiced apple relish made with cloves and cinnamon.",
  "Poached trout in lemon and bay leaf broth, served with herbed butter and fresh greens from Sam’s garden.",
  "Tangy-sweet gooseberry tart in a buttery crust, best served warm with a spoonful of clotted cream.",
  "Golden-baked pie filled with sautéed mushrooms, leeks, and garlic – a dinner table favorite.",
  "Tender cuts of wild-caught rabbit, slow-braised in a hearty Brandybuck brown ale with pearl onions, root vegetables, and a hint of rosemary. Served piping hot with a ladle of thick, savory gravy and crusty hearth-baked bread on the side. A feast-day favorite that warms even the coldest evenings under the Party Tree."

];

const prices = [
    2.99,
    12.50,
    4.50,
    15.99,
    7.50,
    6.75,
    11.00,
    5.55,
    7.99,
    10.99
]



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

content.append(welcome, italicWelcome, para1, container);


let dishes = [];

class Dish{
    constructor(img, name, description, price){
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price
    }

    addToDOM() {
        const dishCard = document.createElement('div');
        dishCard.classList.add('dishCard');

        const dishImgDiv = document.createElement('div');
        dishImgDiv.classList.add('dishImgDiv');
        const dishImg = document.createElement('img');
        dishImg.classList.add('dishImg');
        dishImg.src = this.img;
        
        dishImgDiv.append(dishImg);
        
        const textDiv = document.createElement('div');
        textDiv.classList.add('textDiv');
        const dishName = document.createElement('h3')
        dishName.classList.add('dishName')
        dishName.innerText = this.name;
        const dishDescription =  document.createElement('p');
        dishDescription.classList.add('dishDescription');
        dishDescription.innerText = this.description;
        const price = document.createElement('h5')
        price.classList.add('price')
        price.innerText = `$ ${(this.price.toFixed(2))}`

        textDiv.append(dishName, dishDescription, price);

        dishCard.append(dishImgDiv, textDiv);

        container.append(dishCard)
    }

}

for (let i=0; i<hobbitDishes.length; i++){
    dishes.push(new Dish(imgDishes[i], hobbitDishes[i], dishDescriptions[i], prices[i]))
}

dishes.forEach((el) => {
    el.addToDOM();
    console.log(el.name)
})
console.log(dishes)

}