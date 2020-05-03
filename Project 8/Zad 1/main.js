const spn = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet deleniti ipsum cumque beatae voluptatum impedit, deserunt nisi debitis repellat natus. Itaque placeat quia dignissimos dolor? Tempora necessitatibus quisquam error.';


//PARAMETRY
let indexText = 0;
const time = 40;


//IMPLEMENTACJA
const addLetter = () => {
    spn.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time);


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const flashingCursor = setInterval(cursorAnimation, 400);