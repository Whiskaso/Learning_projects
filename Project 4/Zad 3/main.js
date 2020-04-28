const div = document.querySelector('div');
let divX = 150;
let divY = 50;
let isClicked = false;
let insertDivX;
let insertDivY;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "grey";
    isClicked = true;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener('mousemove', (e) => {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;

    if (isClicked == true) {
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', (e) => {
    div.style.backgroundColor = "black";
    isClicked = false;
})