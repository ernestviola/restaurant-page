const menuList = [
  {
    name: 'Pasta',
    price: '$29'
  },
  {
    name: 'Pizza',
    price: '$32'
  },
  {
    name: 'Steak',
    price: '$44'
  },
  {
    name: 'Shakshuka',
    price: '$25'
  },
  {
    name: 'Mushroom Stew',
    price: '$20'
  },
]

const menu = document.createElement('div');
menu.className = 'menu';

for (let i = 0; i < menuList.length; i++) {
  const menuItem = document.createElement('div');
  const menuItemName = document.createElement('span');
  const menuItemPrice = document.createElement('span');
  menuItemName.innerText = menuList[i].name;
  menuItemPrice.innerText = menuList[i].price;

  menuItem.className = 'menu__item';
  menuItemName.className = 'menu__item__name';
  menuItemPrice.className = 'menu__item__price';

  menuItem.appendChild(menuItemName);
  menuItem.appendChild(menuItemPrice);

  menu.appendChild(menuItem);
}

export default menu