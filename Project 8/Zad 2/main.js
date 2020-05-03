// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
let txt = ['Siemaneczko', 'to jest pisanie maszynowe', 'niezły efekt co nie ?'];

txt = txt.map((x) => {
    return x.toUpperCase();
})

let txtIndex = 0;
let letterIndex = 0;
let sentence = '';
let delay = 2000;

// Implementacja
const addLetter = (array, delay) => {
    setTimeout(() => {
        delay = 100;
        sentence += array[txtIndex][letterIndex];
        letterIndex++;
        spnText.textContent = sentence;

        if (letterIndex == array[txtIndex].length) {
            txtIndex++;
            letterIndex = 0;
            delay = 2000;
            sentence = '';
        }

        if (txtIndex !== array.length && letterIndex !== array[txtIndex].length) {
            addLetter(array, delay);
        }
    }, delay);
}

addLetter(txt, delay); // pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);





// ROZWIAZANIE Z PĘTLAMI 
// // Implementacja
// const addLetter = (array, index) => {
//     // Użyj w środku setTimeout
//     for (let i = 0; i < array[index].length; i++) {

//         setTimeout(() => {
//             spnText.textContent += array[index][i];
//         }, i * 100);
//     }
// }

// const addSentence = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         setTimeout(() => {
//             spnText.textContent = '';
//             addLetter(array, i);
//         }, i * 5000);
//     }
// }

// addSentence(txt);