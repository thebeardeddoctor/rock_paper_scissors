
const rock = document.getElementById('🪨');
const paper = document.getElementById('🧻');
const scissors = document.getElementById('✂️');
const userGuess= document.getElementById('userGuess')
const compGuess=document.getElementById('compGuess')
const round = document.getElementById('result-message')
const compScore= document.getElementById('computer-score')
const playerScore=document.getElementById('user-score')
const results = document.querySelector('.endgame')
const resetbtn=document.querySelector('#restartbtn')

let userScore=0;
let computerScore=0;
let computerEntry='';
let playerEntry='';
let gameWeapons = ["🪨", "🧻", "✂️"];
let outcome='';



rock.addEventListener('click', ()=>{
  userGuess.textContent=`Player:\n ${rock.id}`;
  playerEntry='🪨';
  computerguess();
})

paper.addEventListener('click', ()=>{
  userGuess.textContent=`Player:\n ${paper.id}`;
  playerEntry="🧻"
  computerguess();
})
scissors.addEventListener('click', ()=>{
  userGuess.textContent=`Player:\n ${scissors.id}`;
  playerEntry='✂️'
  computerguess();
})



function computerguess(){ 
  computerEntry= gameWeapons[Math.floor(Math.random()*gameWeapons.length)];
  compGuess.textContent=`Computer:\n ${computerEntry}`
  checkWinner();
}

  function checkWinner(){ 
    console.log(playerEntry)
    console.log(computerEntry) 
    if (computerEntry===playerEntry) {
      outcome="We have a draw! Please guess again!";
    } else if (computerEntry==="🪨" && playerEntry==="🧻"){
      outcome="You win! 🧻 COVERS 🪨!";
      userScore++;
    } else if(computerEntry==="🧻" && playerEntry==="✂️"){
      outcome="You win! ✂️ CUTS 🧻!";
      userScore++;
    } else if (computerEntry==="✂️" && playerEntry==="🪨"){
      outcome="You win! 🪨 SMASHES ✂️!";
      userScore++;
    } else if (playerEntry==="🪨" && computerEntry==="🧻"){
      outcome="You lose! 🧻 COVERS 🪨!";
      computerScore++;
    } else if(playerEntry==="🧻" && computerEntry==="✂️"){
      outcome="You lose! ✂️ CUTS 🧻!";
      computerScore++;
    } else if (playerEntry==="✂️" && computerEntry==="🪨"){
      outcome="You lose! 🪨 SMASHES ✂️!";
      computerScore++;
  }
    round.textContent=outcome;
    compScore.textContent=`${computerScore}`;
    playerScore.textContent=`${userScore}`;
    if (userScore===10||computerScore===10){
      endGame();
    }
    }
  
  function resetGame(){
    playerScore.textContent=0;
    compScore.textContent=0;
    userGuess.textContent='Player:';
    compGuess.textContent='Computer:';
    round.textContent=''
    userScore=0;
    computerScore=0;
    computerEntry='';
    playerEntry='';
    outcome='';
  }
function endGame(){
  if(userScore==10){
     round.textContent="Congrats! You've Won!" 
     resetGame()
  } else if(computerScore==10){
    round.textContent="Sorry! You Lose!"
    resetGame()
  }
}

resetbtn.addEventListener('click',
  resetGame
 )