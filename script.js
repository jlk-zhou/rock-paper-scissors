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
    if (humanChoice === computerChoice) {
        console.log(`${humanChoice} vs ${computerChoice}: it's a tie! `); 
    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || humanChoice === "paper" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "rock"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. `); 
        computerScore += 1; 
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. `); 
        humanScore += 1; 
    }
}

/**
 * The main game loop. Plays the game for 5 times and returns a message
 * that announces the game result in the end
 * @returns {string} "You win! ", "Computer wins! " or "It's a tie! "
 */
function playGame() {

    // Play game for 5 times
    for (i = 0; i < 5; i++) {

        // Get both computer and human choices
        let computerChoice = getComputerChoice(); 
        let humanChoice = getHumanChoice(); 

        // Play a round
        playRound(humanChoice, computerChoice); 
        
    }

    // Announce winner
    if (humanScore > computerScore) {
        console.log("You win! "); 
    } else if (humanScore < computerScore){
        console.log("Computer wins! "); 
    } else {
        console.log("Tie game! "); 
    }
}

playGame(); 