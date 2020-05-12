const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const span = document.querySelector('span');
const tasks = [];

const renderList = () => {
    ul.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        ul.innerHTML += `<li data-key="${i}">${tasks[i]} <button>Remove</button></li>`;
    }
    span.textContent = ul.childElementCount;

    const buttons = [...document.querySelectorAll('li button')];
    buttons.forEach(element => {
        element.addEventListener('click', remove);
    });
}

const remove = (e) => {
    const index = e.target.parentNode.dataset.key;

    if (index > -1) {
        tasks.splice(index, 1);
    }
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    if (input.value === '') return;

    const task = input.value;
    tasks.push(task);

    input.value = '';

    renderList();
}


form.addEventListener('submit', addTask);