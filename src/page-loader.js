import heroImageUrl from './aleksandra-dementeva-6lpikFFzyd4-unsplash.jpg';
import { createElement } from "./domHelpers.js";

function buildIntro() {
  const content = document.getElementById('content');

  content.innerHTML = "";

  const newDiv = createElement('div', 'split');
  const childDiv1 = createElement('div', 'split__media');
  const childDiv2 = createElement('div', 'split__content');
  const h1 = createElement('h1', null, "Chuck's Bakery");
  const introP = createElement('p', null, 'An artisan bakery specializing in pastries and desserts. Made fresh daily.');
  // const menuBtn = createElement('button', null, 'View our menu');
  const heroImg = document.createElement('img');
  const link = document.createElement('a');
  link.href = 'https://unsplash.com/@alexphotogram';
  link.textContent = 'Aleksandra Dementeva';
  const creditP = document.createElement('p');
  creditP.append('Photo Credit ', link, ' on Unsplash');

  heroImg.src = heroImageUrl;
  heroImg.alt = "Photo of bakery";

  content.append(newDiv);
  newDiv.append(childDiv1);
  newDiv.append(childDiv2);
  childDiv1.append(heroImg);
  childDiv1.append(creditP);
  childDiv2.append(h1);
  childDiv2.append(introP);
  // childDiv2.append(menuBtn);
}

const cakes = [
  {
    title: 'Cheesecake',
    description: 'Thin base made from crushed biscuits, with a thicker top layer of soft cheese, eggs and sugar',
  },
  {
    title: 'Tiramisu',
    description: 'Made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavored with cocoa',
  },
  {
    title: 'Chiffon',
    description: 'Light, airy cake made with vegetable oil, eggs, sugar, flour',
  },
  {
    title: 'Tres Leches',
    description: 'Sponge cake soaked with evaporated milk, condensed milk, and heavy cream or sour cream',
  },
  {
    title: 'Black Forest',
    description: 'Several layers of chocolate sponge cake sandwiched with whipped cream and cherries',
  },
];

const pastries = [
  {
    title: 'Cinnamon Roll',
    description: 'Sweet roll made from flour, cinnamon, sugar, and butter with cream cheese icing',
  },
  {
    title: 'Éclair',
    description: 'Oblong pastry made with choux dough filled with a cream and topped with icing',
  },
  {
    title: 'Croissant',
    description: 'Buttery flaky bread made of a layered yeast-leavened dough',
  },
  {
    title: 'Kouign-amann',
    description: 'Round crusty cake containing layers of butter and sugar folded in',
  },
  {
    title: 'Pain au Chocolat',
    description: 'Sweet roll consisting of yeast-leavened laminated dough pieces of dark chocolate in the centre',
  },
  {
    title: 'Apple Tart',
    description: 'Consisting of apple filling over a pastry base with an open top not covered with pastry',
  },
];

const breads = [
  {
    title: 'Baguette',
    description: 'Thin elongated loaf, made of water, flour, yeast, and salt',
  },
  {
    title: 'Ciabatta',
    description: 'Italian white bread made from wheat flour, water, olive oil, salt, and yeast',
  },
  {
    title: 'Whole Wheat',
    description: 'Made using flour which is entirely made from whole wheat grains',
  },
  {
    title: 'White',
    description: 'Made from wheat flour from which the bran and the germ have been removed through a process known as milling',
  },
];

function appendMenuCategory(menuCategories, categoryName, items) {
  const category = createElement('div', 'menu-category');
  category.append(createElement('h2', null, categoryName));

  const itemGrid = createElement('div', 'menu-category__items');
  items.forEach(({ title, description }) => {
    const item = createElement('div');
    item.append(createElement('h3', null, title));
    item.append(createElement('p', null, description));
    itemGrid.append(item);
  });
  category.append(itemGrid);

  menuCategories.append(category);
}

function displayMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuSection = createElement('main');
  menuSection.setAttribute('id', 'menu-section');

  const menuContainer = createElement('div', 'container');
  const menuCategories = createElement('div', 'menu-categories');

  appendMenuCategory(menuCategories, 'Cakes', cakes);
  appendMenuCategory(menuCategories, 'Pastries', pastries);
  appendMenuCategory(menuCategories, 'Breads', breads);

  menuContainer.append(createElement('h1', null, 'Menu'));
  menuContainer.append(menuCategories);
  menuSection.append(menuContainer);
  content.append(menuSection);
}

function displayAbout() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const newDiv = createElement('div', 'menu-category');
  const container = createElement('div', 'container');
  const h1 = createElement('h1', null, "About Chuck's Bakery");
  const link = document.createElement('a');
  link.href = 'https://codepen.io/kathykato/pen/KGVzVg?editors=1100';
  link.textContent = 'Katherine Kato on Codepen';
  
  const aboutP = createElement('p');
  aboutP.append('An artisan bakery specializing in pastries and desserts. Made fresh daily. Content from ', link, '.');


  const copyRight = createElement("p", null, "© 2026 Chuck McQuilkin");
  content.append(newDiv);
  newDiv.append(container);
  container.append(h1);
  container.append(aboutP);
  content.append(copyRight);
}

export { buildIntro, displayMenu, displayAbout };