// http://websamuraj.pl/examples/js/projekt11/
const div = document.querySelector('.time div');
const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
let time = 0;
let active = false;
let idI;

const stoper = () => {
    if (!active) {
        active = !active;
        startBtn.textContent = 'Pauza';
        idI = setInterval(start, 10);
    } else {
        active = !active;
        startBtn.textContent = 'Start';
        clearInterval(idI);
    }
}

const start = () => {
    time++;
    div.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    div.textContent = '---';
    active = false;
    startBtn.textContent = 'Start';
    clearInterval(idI);
}



startBtn.addEventListener('click', stoper);

resetBtn.addEventListener('click', reset);