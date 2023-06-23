
const numbers = [];
const guessedNumbers = [];
let timer;
const timerDisplay = document.getElementById("timer");
const numbersContainer = document.getElementById("numbers-container");
const startButton = document.getElementById("start-button");

// GENERA NUMERI CASUALI E AVVIA IL TIMER
function generateRandomNumbers() {
    for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);
    }
    displayNumbers();
    startTimer();
}

// MOSTRA I NUMERI GENERATI ALL'UTENTE
function displayNumbers() {
    numbersContainer.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
    const numberBox = document.createElement("div");
    numberBox.className = "number-box";
    numberBox.textContent = numbers[i];
    numbersContainer.appendChild(numberBox);
    }
}
// AVVIA IL TIMER
function startTimer() {
    let timeLeft = 30;
    timer = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        numbersContainer.innerHTML = "";
        collectGuesses();
    } else {
        timerDisplay.textContent = timeLeft;
        timeLeft--;
    }
    }, 1000);
}
// NASCONDI I NUMERI DA MEMORIZZARE
setTimeout(() => {
    const box = document.getElementById('numbers-container');
    box.style.display = 'none';
  }, 30000); 
  // RACCOGLIE I NUMERI INDOVINATI DALL'UTENTE
function collectGuesses() {
    for (let i = 0; i < numbers.length; i++) {
    const guess = prompt("Inserisci il numero " + (i + 1));
    const parsedGuess = parseInt(guess);
    guessedNumbers.push(parsedGuess);
    }
    checkGuesses();
}

// CONTROLLA I NUMERI INDOVINATI
function checkGuesses() {
    const correctGuesses = [];
    for (let i = 0; i < numbers.length; i++) {
    if (guessedNumbers[i] === numbers[i]) {
        correctGuesses.push(numbers[i]);
    }
    }
    const message = "Hai indovinato " + correctGuesses.length + " numeri: " + correctGuesses.join(", ");
    alert(message);
}

// EVENT LISTENER PER IL PULSANTE DI AVVIO
startButton.addEventListener("click", function() {
    generateRandomNumbers();
    startButton.disabled = true;
});
