let game = {
    number: 0,
    win: 0,
    loss: 0,
    draw: 0,
};
const gameChoice = [
    "stone",
    "paper",
    "scissors",
]

let your = document.querySelector('#your');
let ai = document.querySelector('#ai');
let result = document.querySelector('#result');
let currentChoice = '';
let choiceAi = '';

function mark() {
    document.querySelectorAll('img').forEach(e => e.classList.remove('red'));
    currentChoice = this.name;
    this.classList.add('red');
}

function start() {
    if (!currentChoice) return alert('Choice hand! ')
    choiceAi = gameChoice[Math.floor((Math.random() * gameChoice.length))]
    your.textContent = ` ${currentChoice}`;
    ai.textContent = ` ${choiceAi}`;
    document.querySelectorAll('img').forEach(e => e.classList.remove('red'));
    game.number++;
    document.querySelector('#number').textContent = game.number;
    whoWin();
    currentChoice = "";
    choiceAi = "";
}

function whoWin() {
    if (currentChoice === choiceAi) {
        result.textContent = "  Draw :/";
        result.style.color = "gray";
        your.style.color = 'black';
        ai.style.color = 'black';
        game.draw++;
        document.querySelector('#draws').textContent = game.draw;
    }
    else if (currentChoice == "stone" && choiceAi == "scissors" || currentChoice == "paper" && choiceAi == "stone" || currentChoice == "scissors" && choiceAi == "paper") {
        result.textContent = "  You Win! :)";
        result.style.color = "green";
        your.style.color = 'green';
        ai.style.color = 'red';
        game.win++;
        document.querySelector('#wins').textContent = game.win;
    }
    else {
        result.textContent = "  You loss ! :(";
        result.style.color = "red";
        your.style.color = 'red';
        ai.style.color = 'green';
        game.loss++
        document.querySelector('#losses').textContent = game.loss;
    }
}

document.querySelectorAll('img').forEach(e => e.addEventListener('click', mark));
document.querySelector('button').addEventListener('click', start)