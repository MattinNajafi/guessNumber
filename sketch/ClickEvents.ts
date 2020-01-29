class ClickEvents {
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

  // public guessSpanRadios(): number {
  //   let spanRadios: any = document.querySelectorAll(
  //     ".adjust-span input[type='radio']"
  //   );
  //   let spanLabels: any = document.querySelectorAll(".adjust-span label");
  //   let guessSpan: number = parseInt(
  //     document.querySelector(".adjust-span .checked-label input").value
  //   );

  //   for (let i = 0; i < spanRadios.length; i++) {
  //     spanRadios[i].addEventListener("input", function(
  //       guessSpan: string | number
  //     ) {
  //       for (let j = 0; j < spanRadios.length; j++) {
  //         if (!spanRadios[j].checked) {
  //           spanLabels[j].classList.remove("checked-label");
  //         }
  //       }
  //       if (spanRadios[i].checked) {
  //         spanLabels[i].classList.add("checked-label");
  //         guessSpan = parseInt(spanRadios[i].value);
  //       }
  //     });
  //   }
  //   console.log("4 : " + guessSpan);
  //   return guessSpan;
  // }

  public displayBotPresentation(): void {
    let easyBot: any = document.querySelector(".easyBot");
    let easyBotText: any = document.querySelector(".easyBotText");
    /* let mediumBot: any = document.querySelector(".mediumBot");
    let mediumBotText: any = document.querySelector(".mediumBotText");
    let hardBot: any = document.querySelector(".hardBot");
    let hardBotText: any = document.querySelector(".hardBotText"); */
    let open: Boolean = false;

    easyBot.addEventListener("click", function() {
      if (!open) {
        easyBotText.style.display = "block";
        open = true;
      } else if (open) {
        easyBotText.style.display = "none";
        open = false;
      }
    });

  /*   mediumBot.addEventListener("click", function() {
      if (!open) {
        mediumBotText.style.display = "none";
        open = true;
      } else if (open) {
        mediumBotText.style.display = "block";
        open = false;
      }
    });

    hardBot.addEventListener("click", function() {
      if (!open) {
        hardBotText.style.display = "none";
        open = true;
      } else if (open) {
        hardBotText.style.display = "block";
        open = false;
      }
    }); */
  }

  public testButton(logtext: number | string) {
    let testButton: any = document.querySelector(".TEST");
    testButton.addEventListener("click", function() {
      console.log(logtext);
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
  public startGame(gamePhase:number){
    let startGameButton: any = document.querySelector(".startGameButton")
    gamePhase = gamePhase

    startGameButton.addEventListener("click",function(gamePhase: number){
      gamePhase = 2;
      updatePhase(gamePhase);
    
    })
  }



}
