const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const span = document.querySelector('span');

const remove = (e) => {
    e.target.parentNode.remove();
    span.textContent = ul.childElementCount;
}

const addTask = (e) => {
    e.preventDefault();
    const task = document.createElement('li');
    task.classList.add('task');

    if (input.value === '') return;

    task.innerHTML = input.value + ` <button class="delete">Delete</button`;
    ul.appendChild(task);

    span.textContent = ul.childElementCount;

    input.value = '';

    task.querySelector('button').addEventListener('click', remove);
}


form.addEventListener('submit', addTask);