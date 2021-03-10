import { changeColor } from './js/metodos';
import './index.scss'

const button = document.querySelector('.button-wrapper__btn');

button.addEventListener('click', changeColor);
