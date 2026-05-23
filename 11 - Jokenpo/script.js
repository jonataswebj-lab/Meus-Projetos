const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const machineScoreLabel = document.querySelector('#machine-score-label')
const opponentInputWrapper = document.querySelector('#opponent-input-wrapper')
const changeOpponentButton = document.querySelector('#change-opponent-button')

let humanScoreNumber = 0
let machineScoreNumber = 0
let opponentName = 'Máquina'

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

const playHuman = (humanChoice) => {
    console.log('Humano: ' + humanChoice)

    const machineChoice = playMachine()
    console.log('Máquina: ' + machineChoice)

    playTheGame(humanChoice, machineChoice)
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const setOpponentName = () => {
    const input = document.querySelector('#opponent-name-input')
    const name = input.value.trim()

    opponentName = name ? name : 'Máquina'
    machineScoreLabel.innerText = `Pontuação de ${opponentName}`
    opponentInputWrapper.style.display = 'none'
    changeOpponentButton.style.display = 'inline-block'
}

const openOpponentInput = () => {
    opponentInputWrapper.style.display = 'block'
    changeOpponentButton.style.display = 'none'
    document.querySelector('#opponent-name-input').focus()
}

const playTheGame = (human, machine) => {


    if (human === machine) {
        result.innerHTML = "Empate"
    }
    else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }
}