//Function that returns either Rock, Paper or Scissors
const computerPlay = () => {

    //A number between 1 and 3 must be returned
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    if(computerChoice === 1){
        return "rock";
    }
    else if(computerChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

//Function that plays a Round of Rock, Paper and Scissors
const gamePlay = (userSelection) =>{

    computerSelection = computerPlay();

    if(userSelection === computerSelection){
        return "Draw"
    }
    else if(userSelection === "rock"){
        if(computerSelection === "paper"){
            return "ComputerWins"
        }
        else{
            return "UserWins"
        }
    }else if(userSelection === "paper"){
        if(computerSelection === "scissors"){
            return "ComputerWins"
        }
        else{
            return "UserWins"
        }
    }else if(userSelection === "scissors"){
        if(computerSelection === "rock"){
            return "ComputerWins"
        }
        else{
            return "UserWins"
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


const winnerHandler = (winner) =>{
 if(winner === "User-Wins"){
     alert("Congratulations, you won!");
     resetScoreHandler();
     
 }
 if(winner === "Computer-Wins"){
     alert("The computer won!");
     resetScoreHandler();
 }
}

const updateScoreHandler = result =>{
    if(result === "UserWins"){
        ++score[0];
        userScoreText.textContent = `${score[0]}`;
    }
    else if(result === "ComputerWins"){
        ++score[1];
        computerScoreText.textContent = `${score[1]}`;
    }
    else{
        score[2]++;
        drawsText.textContent = `${score[2]}`;
    }

    if(score[0] === 5){
        userScoreText.textContent = `${score[0]}`;
        winnerHandler("User-Wins");
    }
    else if(score[1] === 5){
        computerScoreText.textContent = `${score[1]}`;
        winnerHandler("Computer-Wins");
    }

    return "Keep-Going";
}


const userSelectionHandler = selection => {
    let result = gamePlay(selection);
    updateScoreHandler(result);
}

const btn = document.querySelectorAll('button');

//Adding a event listener to every button and passing the
//selection to the gameplay function;
btn.forEach((e) => {
    e.addEventListener('click', ()=>{
        userSelectionHandler(e.id);
    })
})



