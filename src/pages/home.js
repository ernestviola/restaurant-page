/*
<div class='hero'>
  <img src='images/restaurant.jpg' alt='Picture of the Restaurant'>
  <div class='hero__description'>
    <h1>Dine with us</h1>
    <p>Description of the restaurant and ambiance</p>
  </div>
</div>
<div class='reservation__form'>
  <form action=''>
  </form>
</div>

*/

import restaurantImg from '../images/restaurant.jpg';

const hero = document.createElement('div');
hero.className = 'hero';

const img = document.createElement('img');
img.src = restaurantImg;
img.alt = 'Picture of the restaurant.';

const heroDescription = document.createElement('div');
heroDescription.className = 'hero__description';

const heroDescriptionHeader = document.createElement('h1');
heroDescriptionHeader.innerText = 'Dine with us!';

const heroDescriptionParagraph = document.createElement('p');
heroDescriptionParagraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora eligendi labore iusto, reprehenderit perferendis natus? Accusantium aperiam atque magnam nobis rem voluptatibus, harum corrupti velit, quo earum, nostrum inventore voluptas ut. Est, eveniet natus. Fuga iste explicabo cumque voluptatem aliquid saepe animi perspiciatis et doloribus ut maiores, totam laborum facere hic possimus consequatur eum voluptate laboriosam nulla quidem cum recusandae labore? Molestiae adipisci eos repellendus rerum atque dolor deserunt saepe facere fuga sunt ducimus reiciendis voluptatem fugit aliquid exercitationem eligendi nesciunt optio, omnis perspiciatis corrupti dolores officia.';

heroDescription.appendChild(heroDescriptionHeader);
heroDescription.appendChild(heroDescriptionParagraph);

hero.appendChild(img);
hero.appendChild(heroDescription);

const home = hero;

export default home;