import mapImage from '../images/map.png'

const contact = document.createElement('div');
const contactHeader = document.createElement('div');
const contactTitle = document.createElement('h1');
const contactHeaderItems = document.createElement('div');
const map = document.createElement('img');
const address = document.createElement('span');
const telephone = document.createElement('span');


contact.className = 'contact';
contactHeader.className = 'contact__header';
contactTitle.className = 'contact__title';
map.className = 'contact__map';
address.className = 'contact__address';
telephone.className = 'contact__telephone';
contactHeaderItems.className = 'contact__header__items';

contactTitle.innerText = 'Contact'
address.innerText = 'Address: 4th & Berry St';
telephone.innerText = 'Telephone: (123)-456-7890'

map.src = mapImage;
map.alt = 'A placeholder map image'

contactHeaderItems.appendChild(telephone);
contactHeaderItems.appendChild(address);
contactHeader.appendChild(contactTitle);
contactHeader.appendChild(contactHeaderItems);
contact.appendChild(map);
contact.appendChild(contactHeader);

export default contact;