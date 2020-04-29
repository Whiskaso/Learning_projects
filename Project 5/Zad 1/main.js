const input = document.getElementById('pass');
const div = document.querySelector('div');

const passwords = ["user", "wiosna"];
const messages = ["Witam serdecznie. Hasło poprawne.", "Lato, jesien, zima."];

input.addEventListener('input', (e) => {
    const text = e.target.value;

    div.textContent = "";

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    });
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})



// if (password === e.target.value) {
//     div.textContent = message;
//     e.target.value = "";
// } else {
//     div.textContent = "";
// }