const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

let menuVisible = false;

menuBtn.addEventListener('click', () => {
  menuVisible = !menuVisible;
  menu.classList.toggle('menu-visible', menuVisible);
});


Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
item.onmouseover = () => {
menu.dataset.activeIndex = index;
}
});