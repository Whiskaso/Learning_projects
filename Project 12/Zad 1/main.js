const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];
const buttons = [...document.querySelectorAll('button')];


// REMOVING ELEMENTS 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.style.textDecoration = 'line-through';
        button.remove();
    })
});