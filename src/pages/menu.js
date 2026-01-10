const menuList = [
  {
    name: 'Pasta',
    price: '$29',
    description: 'A pasta in tomato sauce.'
  },
  {
    name: 'Pizza',
    price: '$32',
    description: 'Pizza with garlic and herb. Options: Red/White, pepporoni, arugula, tomatoes, and sardines.'
  },
  {
    name: 'Steak',
    price: '$44',
    description: 'With a side of potatoes or fries and a salad.'
  },
  {
    name: 'Shakshuka',
    price: '$25',
    description: 'A tomato like dish with eggs, mushrooms, onions, garlic, and a side of bread.'
  },
  {
    name: 'Mushroom Stew',
    price: '$26',
    description: 'A heart warming stew with mushrooms, garlic, and onions with an optional slow cooked beef.'
  },
]

const menu = document.createElement('div');
menu.className = 'menu';

const menutTitle = document.createElement('h1');
menutTitle.className = 'menu__title';
menutTitle.innerText = 'Menu';

menu.appendChild(menutTitle);

for (let i = 0; i < menuList.length; i++) {
  const menuItem = document.createElement('div');
  const menuItemHeader = document.createElement('div');
  const menuItemName = document.createElement('span');
  const menuItemPrice = document.createElement('span');
  const menuItemDescription = document.createElement('p');
  menuItemDescription.innerText = menuList[i].description;
  menuItemName.innerText = menuList[i].name;
  menuItemPrice.innerText = menuList[i].price;


  menuItem.className = 'menu__item';
  menuItemHeader.className = 'menu__item__header';
  menuItemName.className = 'menu__item__name';
  menuItemPrice.className = 'menu__item__price';
  menuItemDescription.className = 'menu__item__description';

  menuItemHeader.appendChild(menuItemName);
  menuItemHeader.appendChild(menuItemPrice);
  menuItem.appendChild(menuItemHeader);
  menuItem.appendChild(menuItemDescription);

  menu.appendChild(menuItem);
}

export default menu