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
