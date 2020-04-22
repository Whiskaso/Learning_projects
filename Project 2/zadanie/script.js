const strip = document.createElement('div');
let size = 10;
let gettingBigger = true;

document.body.style.height = '10000px'
strip.style.width = '100%';
strip.style.height = size + 'px';
strip.style.backgroundColor = 'green';
strip.style.position = 'fixed';

document.body.appendChild(strip);

const changeHeight = function () {
  strip.style.height = size + 'px';

  if (size > window.innerHeight / 2) {
    gettingBigger = false;
  } else if (size == 10) {
    gettingBigger = true;
  }

  if (gettingBigger) {
    size += 5;
    strip.style.backgroundColor = 'green';
  } else {
    size -= 5;
    strip.style.backgroundColor = 'red';
  }
}

window.addEventListener('scroll', changeHeight);