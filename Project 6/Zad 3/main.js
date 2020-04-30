const div = document.querySelector('div');
const names = [];

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const nameToAdd = input.value;


    if (input.value !== "") {

        for (name of names) {
            if (name === nameToAdd) {
                alert('That name already exist.')
                return;
            }
        }

        names.push(nameToAdd);
        div.textContent += nameToAdd + ', ';
        input.value = "";
    }


}

document.querySelector('button').addEventListener('click', addName);