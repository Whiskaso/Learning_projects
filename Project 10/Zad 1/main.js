const add = (start = 0) => {
    let number = start;
    return () => {
        number++
        document.body.textContent = `aktualny stan licznika kliknięć to ${number}`
    }
}

const counter = add()

document.addEventListener('click', counter)