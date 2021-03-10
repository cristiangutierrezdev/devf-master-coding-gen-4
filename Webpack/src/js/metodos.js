const links = document.querySelectorAll('.mi-menu__nav-link');
const menu = document.querySelector('.mi-menu');

export function changeColor() {
  menu.classList.toggle('mi-menu--bg-green');
  links.forEach((link)=>{
    link.classList.toggle('mi-menu--color-white');
  })
}
