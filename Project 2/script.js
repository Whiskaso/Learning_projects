const square = document.createElement('div');
let size = 100; // wielkosc kwadratu
let gettingBigger = true;


document.body.appendChild(square);
square.style.width = size + 'px';
square.style.height = size + 'px';

window.addEventListener('scroll', () => {
  square.style.width = size + 'px';
  square.style.height = size + 'px';

  if (gettingBigger) {
    size += 5;
  } else {
    size -= 5;
  }

  if (size >= window.innerWidth * 0.5) {
    gettingBigger = false;
  } else if (size == 10) {
    gettingBigger = true;
  }

})