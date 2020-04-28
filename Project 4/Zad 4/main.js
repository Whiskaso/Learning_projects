/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);

  if (e.keyCode === 38 && red < 255) {
    red += 2;
    green += 2;
    blue += 2;
  } else if (e.keyCode === 40 && red > 0) {
    red -= 2;
    green -= 2;
    blue -= 2;
  }

  // switch (e.keyCode) {
  //   case 38:
  //     red += 2;
  //     green += 2;
  //     blue += 2;
  //     break;
  //   case 40:
  //     red -= 2;
  //     green -= 2;
  //     blue -= 2;
  //     break;
  // }

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('keydown', changeColor)