// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->


let advices = ['fight!', 'think it over again'];

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const inputValue = input.value;

    if (inputValue !== '') {
        for (advice of advices) {
            if (advice === inputValue) {
                alert('That advice already exists.');
                return;
            }
        }
        advices.push(inputValue);
        alert('Advice was added.')
        input.value = '';
        console.log(advices);
    }
}

const resetArray = (e) => {
    e.preventDefault();
    advices = [];
    console.log(advices);
}

const showAdvice = () => {
    advice = advices[Math.floor(Math.random() * advices.length)];
    document.querySelector('h1').textContent = advice;
}

const showOptions = () => {
    alert(`Possible options: ${advices.join(",   ")}`);
}

document.querySelector('.add').addEventListener('click', addAdvice);
document.querySelector('.clean').addEventListener('click', resetArray);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOptions);