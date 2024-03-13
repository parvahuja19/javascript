//deliverables
// 1. we have to give out the previous inputs that were wrong
// 2. we have to tell whether the answer number is lower or higher than the input 

// //functionalities
// 1. take the input from the submit guess button
// 2. store that input in an array which will be displayed in the previous input format
// 3. then we have to check whether it is lower or higher
// 4. check how many tries I have used up (if more than 10 errors then restart the game)


//generating the answer number
let random_num = parseInt(Math.random() * 100 + 1);
console.log(random_num);

//required components
const submit = document.querySelector('#subt');
const user_input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prev_inputs = [];
let num_of_guess = 1;

//a flag value to block the game
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(user_input.value);
        console.log(guess);
        validateGuess(guess);
    });
}
//required functions : 

//to check whether the number is in the range 1-100, also push the number in the array if valid
function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage('not a valid number');
    } else if (guess < 1) {
        displayMessage('less than 1 not acceptable');
    } else if (guess > 100) {
        displayMessage('more than 100 not acceptable');
    } else {
        prev_inputs.push(guess);
        num_of_guess = prev_inputs.length;
        if (num_of_guess < 10) {
            displayGuess(guess);
            checkGuess(guess);
        } else {
            displayGuess(guess);
            displayMessage(`game over, the answer was ${random_num}`);
            endGame();
        }
    }
}

//to check our guess against the answer
function checkGuess(guess) {
    if (guess == random_num) {
        displayMessage(`Congratulations! you got it :)`);
        endGame();
    } else if (guess > random_num) {
        displayMessage(`Try again with a lower value`);
    } else {
        displayMessage(`Try again with a greater value`);
    }
}

//
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//to clear out the user value for next input
function displayGuess(guess) {
    user_input.value = '';
    guessSlot.innerHTML += `${prev_inputs[num_of_guess-1]}  `;
    remaining.innerHTML = `${10 - num_of_guess}`;
}

//to end the game in case of completion
function endGame() {
    displayMessage('');
    user_input.value = '';
    user_input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newgame'>Start New</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

//start a new game whenever wanted
function newGame() {
    const new_game_button = document.querySelector("#newgame");
    new_game_button.addEventListener('click', function(event) {
        random_num = parseInt(Math.random() * 100 + 1);
        prev_inputs = [];
        num_of_guess = prev_inputs.length;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - num_of_guess}`;
        user_input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}