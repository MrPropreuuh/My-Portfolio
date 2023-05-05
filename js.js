const lis = document.querySelectorAll('ul li');

lis.forEach((li, index) => {
  const number = li.querySelector('.number');
  const targetNumber = number.innerText;
  let currentNumber = 0;
  let isHovered = false;

  const base = li.querySelector('.base');
  base.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  base.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  const intervalId = setInterval(() => {
    if (isHovered && currentNumber < targetNumber) {
      currentNumber++;
      number.innerText = currentNumber;
      number.classList.add('fade-in'); // Ajoute la classe fade-in pour appliquer le flou
      setTimeout(() => {
        number.classList.remove('fade-in'); // Supprime la classe fade-in après une courte période de temps
      }, 200);
    } else if (currentNumber === parseInt(targetNumber)) {
      clearInterval(intervalId);
      number.innerText += '%';
    }
  }, 15);
});
// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('#nav-contact-section')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')
};
// scroll sections active link 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('body nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('body nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });

  // sticky navbar 
  let nav = document.querySelector('nav');

  nav.classList.toggle('sticky', window.scrollY > 100);

  // Enleve la navbar quand ont click sur un lien 
  menuIcon.classList.remove('fa-xmark')
  navbar.classList.remove('active')
};



// scroll reaveal animation 
ScrollReveal({
  
  distance: '80px',
  duration: 1700,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, ul', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js 
const typed = new Typed('.multiple-text', {
  strings: ['Étudiant', 'Développeur', 'Technophile'],
  typeSpeed: 50,
  backSpeed: 100,
  backdelay: 1500,
  loop: true
});