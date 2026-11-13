import heroImageUrl from './aleksandra-dementeva-6lpikFFzyd4-unsplash.jpg';

function buildIntro() {
  const content = document.getElementById('content');

  const newDiv = document.createElement('div');
  const childDiv1 = document.createElement('div');
  const childDiv2 = document.createElement('div');
  const heroImg = document.createElement('img');
  const h1 = document.createElement('h1');
  const introP = document.createElement('p');
  const menuBtn = document.createElement('button');

  content.innerHTML = "";

  newDiv.append(childDiv1);
  newDiv.append(childDiv2);
  newDiv.classList.add('split');
  childDiv1.classList.add('split__media');
  heroImg.src = heroImageUrl;
  heroImg.alt = "Photo of bakery";
  childDiv2.classList.add("split__content");
  childDiv2.append(h1);
  h1.append("Chuck's Bakery");

  childDiv2.append(introP);
  introP.append('An artisan bakery specializing in pastries and desserts. Made fresh daily.');

  content.append(newDiv);
  childDiv1.append(heroImg);
}

function displayMenu() {
  const content = document.getElementById('content');
  content.innerHTML = ""
  let menuSection = document.createElement('main');
  let menuContainer = document.createElement('div');
  let menuSection2 = document.createElement('section');
  let menuDiv = document.createElement('div');

  let menuSection3 = document.createElement('div');

  let menuH1 = document.createElement('h1');
  let cakeDiv = document.createElement('div');
  let cakeH2 = document.createElement('h2');
  let cakeDiv2 = document.createElement('div');
  let cakeH3a = document.createElement('h3');
  let cakeP = document.createElement('p');

  let cakeDiv3 = document.createElement('div');
  let cakeH3b = document.createElement('h3');
  let cakeP2 = document.createElement('p');

  let cakeDiv4 = document.createElement('div');
  let cakeH3c = document.createElement('h3');
  let cakeP3 = document.createElement('p');

  let cakeDiv5 = document.createElement('div');
  let cakeH3d = document.createElement('h3');
  let cakeP4 = document.createElement('p');

  let cakeDiv6 = document.createElement('div');
  let cakeH3e = document.createElement('h3');
  let cakeP5 = document.createElement('p');

  content.append(menuSection);
  menuSection.setAttribute('id', 'menu-section');
  menuSection.append(menuContainer);
  menuContainer.classList.add('container');
  menuContainer.append(menuSection2);
  menuSection2.classList.add('grid', 'menu');
  menuSection2.append(menuDiv);
  menuDiv.classList.add('column-xs-12');
  menuDiv.append(menuH1);
  menuH1.innerHTML = 'Menu';

  menuDiv.append(menuSection3);
  menuSection3.classList.add('grid', 'menu-list');

  menuSection3.append(cakeDiv);
  cakeDiv.classList.add('column-xs-12');
  cakeDiv.append(cakeH2);
  cakeH2.innerHTML = 'Cakes';

  menuSection3.append(cakeDiv2);
  cakeDiv2.classList.add('column-xs-12', 'column-md-4');
  cakeDiv2.append(cakeH3a);
  cakeH3a.innerHTML = 'Cheesecake';
  cakeDiv2.append(cakeP);
  cakeP.innerHTML = 'Thin base made from crushed biscuits, with a thicker top layer of soft cheese, eggs and sugar';

  menuSection3.append(cakeDiv3);
  cakeDiv3.classList.add('column-xs-12', 'column-md-4');
  cakeDiv3.append(cakeH3b);
  cakeH3b.innerHTML = 'Tiramisu';
  cakeDiv3.append(cakeP2);
  cakeP2.innerHTML = 'Made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavored with cocoa'

  menuSection3.append(cakeDiv4);
  cakeDiv4.classList.add('column-xs-12', 'column-md-4');
  cakeDiv4.append(cakeH3c);
  cakeH3c.innerHTML = 'Chiffon';
  cakeDiv4.append(cakeP3);
  cakeP3.innerHTML = 'Light, airy cake made with vegetable oil, eggs, sugar, flour';

  menuSection3.append(cakeDiv5);
  cakeDiv5.classList.add('column-xs-12', 'column-md-4');
  cakeDiv5.append(cakeH3d);
  cakeH3d.innerHTML = 'Tres Leches';
  cakeDiv5.append(cakeP4);
  cakeP4.innerHTML = 'Sponge cake soaked with evaporated milk, condensed milk, and heavy cream or sour cream';

  menuSection3.append(cakeDiv6);
  cakeDiv6.classList.add('column-xs-12', 'column-md-4');
  cakeDiv6.append(cakeH3e);
  cakeH3e.innerHTML = 'Black Forest';
  cakeDiv6.append(cakeP5);
  cakeP5.innerHTML = 'Several layers of chocolate sponge cake sandwiched with whipped cream and cherries';

}

function displayAbout() {
  const content = document.getElementById('content');
  content.innerHTML = "&copy; Copyright 2026 Chuck McQuilkin";
}

export { buildIntro, displayMenu, displayAbout };