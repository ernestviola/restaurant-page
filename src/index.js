import './styles.css';
import { hero } from './pages/home.js'

const content = document.querySelector('#content');
const child = document.createElement('div')
content.appendChild(child);
content.appendChild(hero);