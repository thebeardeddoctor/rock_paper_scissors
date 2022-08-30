// declare rockPaper scissors function
function rockPaper()
  // Initialize variables of weapons (rock paper scissors as an array), user imput and computer input
   
 for (i=0; i>5; i++) {
  let weapon = ["rock", "paper", "scissors"];
   let userScore= 0;
   let compScore= 0;
   let userEntry = prompt("Lets play Rock, Paper or Scissors! Make your selection:");
   let userGuess = userEntry.toLowerCase;
   let computerGuess = Math.floor(Math.random() * weapons.length);
  if (weapon.indexOf(userGuess)=== -1){
          return alert("That is not how you play the game!");
          } else if (userGuess===computerGuess){
              return alert("we have a draw!");
            } else if (userGuess===weapon[0] && computerGuess===weapon[2]){
              return alert("rock CRUSHES scissors!");
              userScore++;
    
            } else if (userGuess===weapon[1] && computerGuess===weapon[0]){
                return alert("paper COVERS rock!");
                userScore++;
              } else if (userGuess===weapon[2] && computerGuess===weapon[1]){
                  return alert("Scissors CUT Paper!");
                  userScore++;
                } else return alert("The computer won this round!");
         }
        
    
    if (userScore>compScore){
     return alert("you won!");
    } else return alert("you lost!");
 

 
   
//    Create a while loop to iterate through the game.
//   while(let i=0; i<5; i++){
// //      if (weapon.indexOf(userGuess)=== -1){
//       return alert("That is not how you play the game!");
//       } else if (userGuess===computerGuess){
//           return alert("we have a draw!");
//         } else if (userGuess===weapon[0] && computerGuess===weapon[2]){
//           return alert("rock CRUSHES scissors!");
//           userScore++;

//         } else if (userGuess===weapon[1] && computerGuess===weapon[0]){
//             return alert("paper COVERS rock!");
//             userScore++;
//           } else if (userGuess===weapon[2] && computerGuess===weapon[1]){
//               return alert("Scissors CUT Paper!");
//               userScore++;
//             } else return alert("The computer won this round!");
//      }
    
// }

// if (userScore>compScore){
//  return alert("you won!");
// } else return alert("you lost!");