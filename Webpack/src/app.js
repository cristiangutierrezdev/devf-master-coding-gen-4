import { changeColor } from './metodos';
import './styles.scss'

const button = document.querySelector('.button-wrapper__btn');

button.addEventListener('click', changeColor);
