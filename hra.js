const buttons = document.querySelectorAll('button');
let ikona = 'circle';

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', (event) => {
    if (ikona === 'circle') {
      event.target.classList.add('field--circle');
      const ikonaHrace = document.querySelector('.circle');
      ikonaHrace.src = 'img/cross.svg';
      ikona = 'cross';
    } else {
      event.target.classList.add('field--cross');
      const ikonaHrace = document.querySelector('.circle');
      ikonaHrace.src = 'img/circle.svg';
     ikona = 'circle';
    }
buttons[i].disabled = true;
    });
   }