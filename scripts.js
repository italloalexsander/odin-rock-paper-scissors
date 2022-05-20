//Function that returns either Rock, Paper or Scissors
const computerPlay = () => {

    //A number between 1 and 3 must be returned
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    if(computerChoice === 1){
        return "Rock";
    }
    else if(computerChoice === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

//Function that plays a Round of Rock, Paper and Scissors
const gamePlay = (userSelection) =>{

    computerSelection = computerPlay();

    if(userSelection === computerSelection){
        return [userSelection, computerSelection, "Draw"]
    }
    else if(userSelection === "Rock"){
        if(computerSelection === "Paper"){
            return [userSelection, computerSelection, "ComputerWins"]
        }
        else{
            return [userSelection, computerSelection, "UserWins"]
        }
    }else if(userSelection === "Paper"){
        if(computerSelection === "Scissors"){
            return [userSelection, computerSelection, "ComputerWins"]
        }
        else{
            return [userSelection, computerSelection, "UserWins"]
        }
    }else if(userSelection === "Scissors"){
        if(computerSelection === "Rock"){
            return [userSelection, computerSelection, "ComputerWins"]
        }
        else{
            return [userSelection, computerSelection, "UserWins"]
        }
    }
}

const score = [];
score[0] = 0; //User score
score[1] = 0; //Computer Score
score[2] = 0; //Draw;

const userScoreText = document.getElementById('userScore')
const computerScoreText = document.getElementById('computerScore')
const drawsText = document.getElementById('draws')



const resetScoreHandler = () => {
    score[0] = 0;
    score[1] = 0;
    score[2] = 0;

    userScoreText.textContent = `${score[0]}`;
    computerScoreText.textContent = `${score[1]}`;
    drawsText.textContent = `${score[2]}`;
}


const outerWrapper = document.getElementById('outer-wrapper');
const winnerMessage = document.getElementById('current-message');


const winnerHandler = (winner) =>{
    if(winner === "User-Wins"){
        console.log(score[0]);
        winnerMessage.textContent = "YOU WON THE MATCH " + `${score[0]}` + " to " + `${score[1]}`
        outerWrapper.appendChild(winnerMessage)
        resetScoreHandler();
    }
    if(winner === "Computer-Wins"){
        winnerMessage.textContent = "YOU LOST THE MATCH " + `${score[0]}` + " to " + `${score[1]}`
        outerWrapper.appendChild(winnerMessage)
        resetScoreHandler();
    }
}


const updateScoreHandler = (userSelection, computerSelection, result) =>{
    console.log(result);
    if(result === "UserWins"){
        score[0]++;
        userScoreText.textContent = `${score[0]}`;
        winnerMessage.textContent = `${userSelection}` + " beats " + `${computerSelection}` + " , YOU WON THIS ROUND!"
        outerWrapper.appendChild(winnerMessage);
    }
    else if(result === "ComputerWins"){
        score[1]++;
        computerScoreText.textContent = `${score[1]}`;
        winnerMessage.textContent = `${computerSelection}` + " beats " + `${userSelection}` + " , YOU LOST THIS ROUND!"
        outerWrapper.appendChild(winnerMessage);
    }
    else{
        score[2]++;
        drawsText.textContent = `${score[2]}`;
        winnerMessage.textContent = "Both you and the computer have chosen " + `${userSelection}` + " , IT'S A DRAW!"
        outerWrapper.appendChild(winnerMessage);
    }

    if(score[0] === 5){
        winnerHandler("User-Wins");
    }
    else if(score[1] === 5){
        winnerHandler("Computer-Wins");
    }

    return "Keep-Going";
}


const userSelectionHandler = selection => {
    let result = gamePlay(selection);
    console.log(result);
    updateScoreHandler(result[0], result[1], result[2]);
}

const img = document.querySelectorAll('img');

//Adding a event listener to every button and passing the
//selection to the gameplay function;
img.forEach((e) => {
    e.addEventListener('click', ()=>{
        userSelectionHandler(e.id);
    })
})



