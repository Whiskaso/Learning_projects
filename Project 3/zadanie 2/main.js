let size = 10;
let orderElement = 1;



const init = () => {
    const btn = document.createElement('button');
    const resetBtn = document.createElement('button');
    const ul = document.createElement('ul');

    btn.textContent = 'Add 10 list elements ';
    resetBtn.textContent = 'Reset';
    document.body.appendChild(btn);
    document.body.appendChild(resetBtn);
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);

    resetBtn.addEventListener('click', clearContent);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        const ul = document.querySelector('ul');

        li.textContent = `Element nr: ${orderElement}`;
        li.style.fontSize = size + 'px';
        ul.appendChild(li);
        orderElement++;
        size++;
    }
}

const clearContent = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init()