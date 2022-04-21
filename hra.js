function letsMagicHappens() {
  const buttons = document.querySelectorAll('button');
  const ikonaCircle = 'circle';
  const ikonaCross = 'cross';
  const move = document.querySelector('.circle');

  const moveCircle = (event) => {
    event.target.classList.add('field--circle');
  };

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', moveCircle);
  }
}
/*fce jejíž kód se volá až po načtení html*/
