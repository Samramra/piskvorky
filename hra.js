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

    if (isWinningMove(buttons[i]) === true) {
      let ikona = getSymbol(buttons[i]);

      if (ikona === 'cross') {
        const vitezKrizek = () => {
          alert('Vyhrál křížek');
        };
        setTimeout(vitezKrizek, 400);
        return;
      }
      const vitezKrouzek = () => {
        alert('Vyhrál kroužek');
      };
      setTimeout(vitezKrouzek, 400);
    }
    buttons[i].disabled = true;
  });
}
/*console.log(buttons[15])*/

const getSymbol = (field) => {
  if (field.classList.contains('field--cross')) {
    return 'cross';
  } else if (field.classList.contains('field--circle')) {
    return 'circle';
  }
};
/*console.log(buttons[54])*/

const boardSize = 10;
const getField = (row, column) => {
  return buttons[row * boardSize + column];
};
/*console.log(getField(2, 5)); /*řádek, sloupec*/

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < buttons.length && field !== buttons[fieldIndex]) {
    fieldIndex++;
  }
  console.log(fieldIndex);
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
console.log(getPosition(2, 5));

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let y;
  let x;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  let inDiagonal = 1;
  //Koukni doprava nahoru
  y = origin.column;
  x = origin.row;
  while (
    x > 0 &&
    symbol === getSymbol(getField(x - 1, y + 1)) &&
    y < boardSize - 1
  ) {
    inDiagonal++;
    y++;
    x--;
  }

  //Koukni doleva nahoru
  y = origin.column;
  x = origin.row;
  while (x > 0 && symbol === getSymbol(getField(x - 1, y - 1)) && y > 0) {
    inDiagonal++;
    y--;
    x--;
  }
  //Koukni doprava dolu
  y = origin.column;
  x = origin.row;
  while (
    x < boardSize - 1 &&
    symbol === getSymbol(getField(x + 1, y + 1)) &&
    y < boardSize - 1
  ) {
    inDiagonal++;
    y++;
    x++;
  }

  //Koukni doleva dolu
  y = origin.column;
  x = origin.row;
  while (
    x < boardSize - 1 &&
    symbol === getSymbol(getField(x + 1, y - 1)) &&
    y > 0
  ) {
    inDiagonal++;
    y--;
    x++;
  }

  if (inDiagonal >= symbolsToWin) {
    return true;
  }
  return false;
};
