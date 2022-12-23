let userChoice = null;
let computerChoice = getComputerChoice();
let resetBtn = document.querySelector('.reset');
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scisorBtn = document.querySelector('.scisors');
let result = document.getElementById('result');
let computerChoiceDisplay = document.getElementById('computer-choice');
let userScore = 0;
let compScore = 0;

function getComputerChoice(){
    let randomNumber =  Math.floor(Math.random()*(3));
    if (randomNumber === 0) {
        choice = "Rock";
    } else if(randomNumber === 1) {
        choice = "Paper";
    } else {
        choice = "Scisor";
    }   
    return choice;
}

function getWinner(){
    // user choice rock and all computer choice iterations
    if(userChoice == "Rock" && computerChoice == "Rock"){
        result.innerText="Tie"
        computerChoiceDisplay.innerText="Computer\'s choice was Rock"
    }
    else if(userChoice == "Rock" && computerChoice == "Paper"){
        result.innerText="You Lose!!"
        computerChoiceDisplay.innerText="Computer\'s choice was Paper"
        compScore++;
    }
    else if(userChoice == "Rock" && computerChoice == "Scisor"){
        result.innerText="You Win"
        computerChoiceDisplay.innerText="Computer\'s choice was Scisor"
        userScore++;
    }
    // user choice paper and all computer choice iterations
    else if(userChoice == "Paper" && computerChoice == "Rock"){
        result.innerText="You Win!"
        computerChoiceDisplay.innerText="Computer\'s choice was Rock"
        userScore++;
    }
    else if(userChoice == "Paper" && computerChoice == "Paper"){
        result.innerText="Tie"
        computerChoiceDisplay.innerText="Computer\'s choice was Paper"
        
    }
    else if(userChoice == "Paper" && computerChoice == "Scisor"){
        result.innerText="You Lose"
        computerChoiceDisplay.innerText="Computer\'s choice was Scisor"
        compScore++;
    }
    // user choice scisor and all computer choice iterations
    else if(userChoice == "Scisor" && computerChoice == "Rock"){
        result.innerText="You Lose!"
        computerChoiceDisplay.innerText="Computer\'s choice was Rock"
        compScore++;
    }
    else if(userChoice == "Scisor" && computerChoice == "Paper"){
        result.innerText="You Win"
        computerChoiceDisplay.innerText="Computer\'s choice was Paper"
        userScore++;
    }
    else if(userChoice == "Scisor" && computerChoice == "Scisor"){
        result.innerText="Tie"
        computerChoiceDisplay.innerText="Computer\'s choice was Scisor"
    }
}

function userChoiceRock(){
    userChoice='Rock';
    getWinner();
    resetBtn.classList.remove('reset-hidden');
    rockBtn.removeEventListener('click',userChoiceRock);
    paperBtn.removeEventListener('click',userChoicePaper);
    scisorBtn.removeEventListener('click',userChoiceScisor);
}
function userChoicePaper(){
    userChoice='Paper';
    getWinner();
    resetBtn.classList.remove('reset-hidden');
    rockBtn.removeEventListener('click',userChoiceRock);
    paperBtn.removeEventListener('click',userChoicePaper);
    scisorBtn.removeEventListener('click',userChoiceScisor);
}

function userChoiceScisor(){
    userChoice='Scisor';
    getWinner();
    resetBtn.classList.remove('reset-hidden');
    rockBtn.removeEventListener('click',userChoiceRock);
    scisorBtn.removeEventListener('click',userChoiceScisor);
    paperBtn.removeEventListener('click',userChoicePaper);
}


rockBtn.addEventListener('click',userChoiceRock);

paperBtn.addEventListener('click',userChoicePaper);

scisorBtn.addEventListener('click',userChoiceScisor);

resetBtn.addEventListener('click',()=>{
    result.innerText = "Lets Play!";
    computerChoiceDisplay.innerText = ""
    userChoice = null;
    computerChoice = getComputerChoice();
    resetBtn.classList.add('reset-hidden');
    rockBtn.addEventListener('click',userChoiceRock);
    paperBtn.addEventListener('click',userChoicePaper);
    scisorBtn.addEventListener('click',userChoiceScisor);
})

let userScoreDisp = document.getElementById('user-score');
let compScoreDisp = document.getElementById('computer-score');
setInterval(() => {
    userScoreDisp.innerText = userScore;
    compScoreDisp.innerText = compScore;
},100)