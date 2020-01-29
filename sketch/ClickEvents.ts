class ClickEvents {
  // private guessSpanCallback: (span: number) => void;

  // constructor(guessSpanCallback: (span: number) => void) {
  //   this.guessSpanCallback = guessSpanCallback;
  // }

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

  // public guessSpanRadios(): void {
  //   let spanRadios = document.querySelectorAll(
  //     ".adjust-span input[type='radio']"
  //   ) as NodeListOf<HTMLInputElement>;
  //   let spanLabels: any = document.querySelectorAll(".adjust-span label");

  //   for (let i = 0; i < spanRadios.length; i++) {
  //     spanRadios[i].addEventListener("change", () => {
  //       for (let j = 0; j < spanRadios.length; j++) {
  //         if (!spanRadios[j].checked) {
  //           spanLabels[j].classList.remove("checked-label");
  //         }
  //       }
  //       if (spanRadios[i].checked) {
  //         spanLabels[i].classList.add("checked-label");
          
  //         let guessSpan = parseInt(spanRadios[i].value);
  //         console.log('arrived . guessspan is ' + guessSpan);
  //         this.guessSpanCallback(guessSpan);
  //       }
  //     });
  //   }
  // }

  public botButtonsRadios(): any {
    let botRadios: any = document.querySelectorAll(
      ".botButtons input[type='radio']"
    );
    let botLabels: any = document.querySelectorAll(".botButtons label");

    for (let i = 0; i < botRadios.length; i++) {
      botRadios[i].addEventListener("input");
      {
        for (let j = 0; j < botRadios.length; j++) {
          if (!botRadios[j].checked) {
            botLabels[j].classList.remove(".bot");
          }
        }
        if (botRadios[i].checked) {
          botLabels[i].classList.add(".bot");
        }
      }
    }
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
