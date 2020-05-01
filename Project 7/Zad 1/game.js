const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];


// PIERWSZA FUNKCJA WYBOR GRACZA 

function handSelection() {
    game.playerHand = this.dataset.option;

    hands.forEach(hand => {
        hand.style.boxShadow = "";
    });
    this.style.boxShadow = "0 0 0 4px green";
}

// FUNKCJA WYBORU KOMPUTERA 

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

// FUNKCJA SPRAWDZAJACA WYNIK 

function checkResult(player, ai) {
    console.log(player, ai);
    if (player === ai) {
        return 'remis';
    } else if (player === 'papier') {
        if (ai === 'kamień') {
            return 'wygrana';
        } else {
            return 'przegrana';
        }
    } else if (player === 'kamień') {
        if (ai === 'nożyczki') {
            return 'wygrana';
        } else {
            return 'przegrana';
        }
    } else if (player === 'nożyczki') {
        if (ai === 'papier') {
            return 'wygrana';
        } else {
            return 'przegrana';
        }
    }
}

// PUBLIKACJA WYNIKU 

function publishResult(gameResult) {
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;

    document.querySelector('.numbers span').textContent = ++gameSummary.numbers;

    if (gameResult === 'wygrana') {
        document.querySelector('.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (gameResult === 'przegrana') {
        document.querySelector('.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrał kąkuter :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "yellow";
    }
}

// FUNKCJA CZYSZCZACA , ZERUJACA 

function endGame() {
    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
    game.playerHand = '';
}

// FUNKCJA STERUJACA 

function startGame() {
    if (!game.playerHand) return alert('Please choose the option');

    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);

    publishResult(gameResult);

    endGame();
}

hands.forEach(hand => {
    hand.addEventListener('click', handSelection)
});

document.querySelector('.start').addEventListener('click', startGame);