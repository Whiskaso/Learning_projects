const btn = document.querySelector('button');
let number = 1;


btn.addEventListener('click', () => {
  const div = document.createElement('div');

  if (number % 5 == 0) {
    div.className = 'circle';
  }

  div.textContent = number;
  number++;
  document.body.appendChild(div);
})