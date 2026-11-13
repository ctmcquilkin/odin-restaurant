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
  const menuBtn = createElement('button', null, 'View our menu');
  const heroImg = document.createElement('img');

  heroImg.src = heroImageUrl;
  heroImg.alt = "Photo of bakery";

  content.append(newDiv);
  newDiv.append(childDiv1);
  newDiv.append(childDiv2);
  childDiv1.append(heroImg);
  childDiv2.append(h1);
  childDiv2.append(introP);
  childDiv2.append(menuBtn);
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

function displayMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuSection = createElement('main');
  menuSection.setAttribute('id', 'menu-section');

  const menuContainer = createElement('div', 'container');
  const menuGrid = createElement('section', ['grid', 'menu']);
  const menuColumn = createElement('div', 'column-xs-12');
  const menuList = createElement('div', ['grid', 'menu-list']);

  const cakesHeading = createElement('div', 'column-xs-12');
  cakesHeading.append(createElement('h2', null, 'Cakes'));
  menuList.append(cakesHeading);

  cakes.forEach(({ title, description }) => {
    const cakeItem = createElement('div', ['column-xs-12', 'column-md-4']);
    cakeItem.append(createElement('h3', null, title));
    cakeItem.append(createElement('p', null, description));
    menuList.append(cakeItem);
  });

  menuColumn.append(createElement('h1', null, 'Menu'));
  menuColumn.append(menuList);
  menuGrid.append(menuColumn);
  menuContainer.append(menuGrid);
  menuSection.append(menuContainer);
  content.append(menuSection);
}

function displayAbout() {
  const content = document.getElementById('content');
  content.innerHTML = "&copy; Copyright 2026 Chuck McQuilkin";
}

export { buildIntro, displayMenu, displayAbout };