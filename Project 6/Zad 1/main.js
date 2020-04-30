const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];


const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomName = () => {
    const name = names[randomNumber(0, names.length - 1)];
    const description = prefixs[randomNumber(0, prefixs.length - 1)];

    div.textContent = `${description}, że odpowiednim imieniem będzie: ${name}`;

}


btn.addEventListener('click', randomName);