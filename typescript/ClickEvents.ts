class ClickEvents {
  
  public playAgain(): void{
    let playAgain: any = document.getElementById("restart")
    playAgain.addEventListener("click", function(){

      location.reload()
    })
  }

  public toggleInstructions(): void {
    let toggleBtn: any = document.querySelector(".toggle-btn");
    let content: any = document.querySelector(".instructions .content");
    let open: Boolean = false;

    toggleBtn.addEventListener("click", function() {
      if (!open) {
        content.style.display = "block";
        open = true;
      } else if (open) {
        content.style.display = "none";
        open = false;
      }
    });
  }

  public submitPlayerName(gamePhase: number) {
    let submitNameButton: any = document.querySelector(".submitNameButton");
    let inputNameField: any = document.querySelector(".inputNameField");
    gamePhase = gamePhase;
    inputNameField.focus()
    let functionForSubmitButton;
    submitNameButton.addEventListener("click", functionForSubmitButton = (gamePhase: number) => {
      // if submit button is pressed and the game is in the first phase go to next phase
      if (!(inputNameField.value == "")) {
        // savePlayerName()
        
        

        gamePhase = 1;
        updatePhase(gamePhase);
      } else if (inputNameField.value == "") {
        console.log("enter name!");
      }

      //else display a red border around the input field
    });
  }

  public submitGuess(
    computer: any,
    gamePhase: number,
    yourTurn: boolean,
    bot: any,
    guesslist: Array<number>,
    whatBot: number
  ): void {
    let playerGuessInput: any = document.querySelector(".player-input");
    let playerGuess: number;

    if (yourTurn) {
      document.addEventListener("click", (): void => {
        if (!(playerGuessInput.value == "")) {
          playerGuess = parseInt(playerGuessInput.value);
          guesslist.push(playerGuess);

          playerGuessInput.value = "";
          yourTurn = false;
          console.log(yourTurn);

          computer.checkNumber(playerGuess, gamePhase, yourTurn);

          if (whatBot === 0) {
            bot.easy();
          } else if (whatBot === 1) {
            bot.medium(computer);
          } else if (whatBot === 2) {
            bot.hard(computer);
          }
        }
      });
    }
  }

  public startGame(gamePhase: number) {
    let startGameButton: any = document.querySelector(".startGameButton");
    gamePhase = gamePhase;

    startGameButton.addEventListener("click", function(gamePhase: number) {
      gamePhase = 2;
      updatePhase(gamePhase);
    });
  }

  // TEST BUTTON
  public testButton(logtext: any) {
    let testButton: any = document.querySelector(".TEST");
    testButton.addEventListener("click", function() {
      // test whatever here

      console.log(logtext.length);
    });
  }
}
