// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector("div");


const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = "";

    // passwords.forEach((password, index) => {
    //     if (text.toLowerCase() === password.toLowerCase()) {
    //         div.textContent = messages[index];
    //     }

    // });

    // DRUGIE SPOSÓB ZA POMOCA ZWYKŁEJ PĘTLI

    for (let i = 0; i < passwords.length; i++) {
        if (text.toLowerCase() === passwords[i].toLowerCase()) {
            div.textContent = messages[i];
        }
    }

}

input.addEventListener("input", showMessage)



// ZAMIANA NA LOWER CASE OD RAZU TABLICY 


// passwords.forEach((passwor, index) => {
//     passwords[index] = passwor.toLowerCase();
// });