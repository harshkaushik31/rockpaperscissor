let userChoice = null;
let computerChoice = getComputerChoice();
let resetBtn = document.querySelector('.reset')

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


let rockBtn = document.querySelector('.rock')
rockBtn.addEventListener('click',() => {
    userChoice='Rock'
    getWinner();
    resetBtn.classList.remove('reset-hidden')
    console.log("btn clicked")
});
let paperBtn = document.querySelector('.paper')
paperBtn.addEventListener('click',() => {
    userChoice='Paper'
    getWinner();
    resetBtn.classList.remove('reset-hidden')
});
let scisorBtn = document.querySelector('.scisors')
scisorBtn.addEventListener('click',() => {
    userChoice='Scisor'
    getWinner();
    resetBtn.classList.remove('reset-hidden')
});

let result = document.getElementById('result')
let computerChoiceDisplay = document.getElementById('computer-choice')
function getWinner(){
    // user choice rock and all computer choice iterations
    if(userChoice == "Rock" && computerChoice == "Rock"){
        result.innerText="Tie"
        computerChoiceDisplay.innerText="Computer\'s choice was Rock"
    }
    else if(userChoice == "Rock" && computerChoice == "Paper"){
        result.innerText="You Lose!!"
        computerChoiceDisplay.innerText="Computer\'s choice was Paper"
    }
    else if(userChoice == "Rock" && computerChoice == "Scisor"){
        result.innerText="You Win"
        computerChoiceDisplay.innerText="Computer\'s choice was Scisor"
    }
    // user choice paper and all computer choice iterations
    else if(userChoice == "Paper" && computerChoice == "Rock"){
        result.innerText="You Win!"
        computerChoiceDisplay.innerText="Computer\'s choice was Rock"
    }
    else if(userChoice == "Paper" && computerChoice == "Paper"){
        result.innerText="Tie"
        computerChoiceDisplay.innerText="Computer\'s choice was Paper"
    }
    else if(userChoice == "Paper" && computerChoice == "Scisor"){
        result.innerText="You Lose"
        computerChoiceDisplay.innerText="Computer\'s choice was Scisor"
    }
    // user choice scisor and all computer choice iterations
    else if(userChoice == "Scisor" && computerChoice == "Rock"){
        result.innerText="You Lose!"
        computerChoiceDisplay.innerText="Computer\'s choice was Rock"
    }
    else if(userChoice == "Scisor" && computerChoice == "Paper"){
        result.innerText="You Win"
        computerChoiceDisplay.innerText="Computer\'s choice was Paper"
    }
    else if(userChoice == "Scisor" && computerChoice == "Scisor"){
        result.innerText="Tie"
        computerChoiceDisplay.innerText="Computer\'s choice was Scisor"
    }
}
resetBtn.addEventListener('click',()=>{
    result.innerText = "Lets Play!"
    computerChoiceDisplay.innerText = ""
    userChoice = null
    computerChoice = getComputerChoice();
    resetBtn.classList.add('reset-hidden')
})