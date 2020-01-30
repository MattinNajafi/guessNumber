class ClickEvents {

  public playAgain(): void{
    let playAgain: any = document.getElementById("restart")
    playAgain.addEventListener("click", function(gamePhase:number){
      gamePhase = 0;
      updatePhase(gamePhase);
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

    submitNameButton.addEventListener("click", function(gamePhase: number) {
      // if submit button is pressed and the game is in the first phase go to next phase
      if (!(inputNameField.value == "")) {
        saveToLocalStorage();

        gamePhase = 1;
        updatePhase(gamePhase);
      } else if (inputNameField.value == "") {
        console.log("enter name!");
      }

      //else display a red border around the input field
    });
  }

  public submitGuess(computer: any) {
    let guessButton: any = document.querySelector(".guessButton");
    let playerGuessInput: any = document.querySelector(".player-input");
    let playerGuess: number;

    guessButton.addEventListener("click", function() {
      playerGuess = playerGuessInput.value;
      computer.checkNumber(playerGuess);
    });
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

      console.log(logtext);
    });
  }
}
