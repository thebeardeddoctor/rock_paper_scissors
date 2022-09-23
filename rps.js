// Pseudocode
// 
// get response from player
// assign to playerEntry
// get random response from computer
// assign to computerEntry
// give both to function rockPaperScissors
// compare entries from computer and player
// if player wins, update their score count and give response "you win"
// if computer wins, increment computers score count and tell user "you lose"
// stop game when the best of 5 is figured out 
const 
let userScore=0;
let computerScore=0;
  for (let i=0; i<5; i++){
    let gameWeapons = ["rock", "paper", "scissors"];
    let playerPrompt = prompt("Rock, Paper or Scissors?");
    let computerEntry= gameWeapons[Math.floor(Math.random()*gameWeapons.length)];
    let playerEntry= playerPrompt.toLowerCase();
    
    if (gameWeapons.includes(playerEntry)===false){
      alert("stop throwing gang signs!");
      i--;
    } else if (computerEntry===playerEntry) {
      alert("We have a draw! Please guess again!");
      i--;
    } else if (computerEntry==="rock" && playerEntry==="paper"){
      alert("You win! Paper COVERS rock!");
      userScore++;
    } else if(computerEntry==="paper" && playerEntry==="scissors"){
      alert("You win! scissors CUTS paper!");
      userScore++;
    } else if (computerEntry==="scissors" && playerEntry==="rock"){
      alert("You win! rock SMASHES scissors!");
      userScore++;
    } else if (playerEntry==="rock" && computerEntry==="paper"){
      alert("You lose! Paper COVERS rock!");
      computerScore++;
    } else if(playerEntry==="paper" && computerEntry==="scissors"){
      alert("You lose! scissors CUTS paper!");
      computerScore++;
    } else if (playerEntry==="scissors" && computerEntry==="rock"){
      alert("You lose! rock SMASHES scissors!");
      computerScore++;
  }
}
  alert(`your scored ${userScore} points and the computer scored ${computerScore} `);
