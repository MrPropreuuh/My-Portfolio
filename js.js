const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  e.preventDefault();
  if (!showMenu) {
    menu.classList.add('show');
    showMenu = true;
  } else {
    menu.classList.remove('show');
    showMenu = false;
  }
}

