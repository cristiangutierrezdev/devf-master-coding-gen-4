const menu = document.querySelector('.mi-menu')
const button = document.querySelector('.button')
const links = document.querySelectorAll('.mi-menu__nav-link')

button.addEventListener('click', changeColor)

function changeColor() {
  menu.classList.toggle('mi-menu--bg-green');
  links.forEach((link)=>{
    link.classList.toggle('mi-menu--color-white');
  })
}
