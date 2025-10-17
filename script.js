let humanScore = 0; 
let computerScore = 0; 

/**
 * Computer plays its hand in RPS. 
 * Randomly returns one of "rock", "paper", and "scissors". 
 * @returns {string} one of "rock", "paper", and "scissors" with equal chance. 
 */
function getComputerChoice() {
    randomNumber = Math.random(); 
    if (randomNumber <= (1 / 3)) {
        return "rock"; 
    } else if (randomNumber > (1 / 3) && randomNumber <= (2 / 3)) {
        return "paper"; 
    } else {
        return "scissors"; 
    }
}

/**
 * Prompts user to type in their hand, then returns it. 
 * The only legal inputs are "rock", "paper", "scissors", or their 
 * capitalized variants. 
 * This function assumes users will always input legal input. 
 * @returns {string} The user's input. 
 */
function getHumanChoice() {
    return prompt("Play it... "); 
}

/**
 * Lets human and computer play against each other, and increment score
 * for whoever wins by one. 
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 */
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); 
    let result; 
    if (humanChoice === computerChoice) {
        result = `${humanChoice} vs ${computerChoice}: it's a tie! `; 
    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || humanChoice === "paper" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "rock"
    ) {
        result = `You lose! ${computerChoice} beats ${humanChoice}. `; 
        computerScore += 1; 
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}. `; 
        humanScore += 1; 
    }
    return result; 
}

const buttons = document.querySelectorAll('button'); 
const resultDiv = document.querySelector('#result'); 
const humanSpan = document.querySelector('#human-score'); 
const computerSpan = document.querySelector('#computer-score'); 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        result = playRound(button.textContent, getComputerChoice()); 
        resultDiv.textContent = result; 
        humanSpan.textContent = humanScore; 
        computerSpan.textContent = computerScore; 

        if (humanScore >= 5) {
            alert("You win! "); 
        } else if (computerScore >= 5) {
            alert("Computer wins! "); 
        }
    })
})
