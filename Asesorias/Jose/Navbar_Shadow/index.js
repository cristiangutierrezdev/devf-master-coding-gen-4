const myNav = document.getElementById('myNav');

window.onscroll = function () {
  let y = window.scrollY;
  if (y === 0) {
    myNav.classList.remove('myShadow');
  } else {
    myNav.classList.add('myShadow');
  }
};
