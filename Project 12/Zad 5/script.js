const inputTask = document.querySelector('#task');
const inputSearch = document.querySelector('#search');
const addButton = document.querySelector('#add');
const ul = document.createElement('ul');
const divResult = document.querySelector('div.result');
const span = document.querySelector('span');
const tasks = [];


const search = (e) => {
    const searchText = e.target.value.toLowerCase();
    const liElements = document.querySelectorAll('li');
    const ul = document.querySelector('ul');
    let tasks = [...liElements];

    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));

    ul.textContent = '';

    tasks.forEach(element => {
        ul.appendChild(element);
    });
}

const printTasks = () => {
    divResult.appendChild(ul);
    ul.textContent = '';

    tasks.forEach((element) => {
        const li = document.createElement('li');
        li.innerHTML = element + ` <button class="remove">Remove</button>`;
        ul.appendChild(li);
    });
    inputTask.value = '';

    const buttons = [...document.querySelectorAll('.remove')];
    buttons.forEach((element, index) => {
        element.setAttribute('data-key', index);
        element.addEventListener('click', removeTask);
    });

    span.textContent = tasks.length;
}

const removeTask = (e) => {
    const key = e.target.dataset.key;
    tasks.splice(key, 1);

    printTasks();
}

const addTask = () => {
    if (inputTask.value == '') return;
    const task = inputTask.value;
    tasks.push(task);

    printTasks();
}

inputSearch.addEventListener('input', search);
addButton.addEventListener('click', addTask);