const btn = document.querySelector('body button');
const ul = document.querySelector('ul');
let counter = 1;

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = counter;

  if (counter % 3 == 0) {
    li.classList.add('big');
  }

  counter += 2;
  ul.appendChild(li);
})