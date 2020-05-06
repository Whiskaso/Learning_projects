const slideList = [{
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
}, {
    img: "images/img2.jpg",
    text: "Drugi tekst",
}, {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
}];

const image = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

// INTERFEJS 

const time = 2000;
let active = 0;

// IMPLEMENTACJE 

function changeDot() {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));

    dots[activeDot].classList.remove('active');

    dots[active].classList.add('active');
}

function changeSlide() {
    active++;

    if (active === slideList.length) {
        active = 0
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

setInterval(changeSlide, time);