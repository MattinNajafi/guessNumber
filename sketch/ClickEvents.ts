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

  public guessSpanRadios(): number {
    let spanRadios: any = document.querySelectorAll(
      ".adjust-span input[type='radio']"
    );
    let spanLabels: any = document.querySelectorAll(".adjust-span label");
    let guessSpan: number = parseInt(
      document.querySelector(".adjust-span .checked-label input").value
    );

    for (let i = 0; i < spanRadios.length; i++) {
      spanRadios[i].addEventListener("input", function(
        guessSpan: string | number
      ) {
        for (let j = 0; j < spanRadios.length; j++) {
          if (!spanRadios[j].checked) {
            spanLabels[j].classList.remove("checked-label");
          }
        }
        if (spanRadios[i].checked) {
          spanLabels[i].classList.add("checked-label");
          guessSpan = parseInt(spanRadios[i].value);
        }
      });
    }
    console.log("4 : " + guessSpan);
    return guessSpan;
  }

  botButtonsRadios(): any {
    let botRadios: any = document.querySelectorAll(
      ".botButtons input[type='radio']"
    );
    let botLabels: any = document.querySelectorAll(".botButtons label");

    for (let i = 0; i < botRadios.length; i++) {
      botRadios[i].addEventListener("input") 
      {
        for (let j = 0; j < botRadios.length; j++) {
          if (!botRadios[j].checked) {
            botLabels[j].classList.remove(".bot");
          }
        }
        if (botRadios[i].checked) {
          botLabels[i].classList.add(".bot");
        }
      };
    }

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
        saveToLocalStorage()

        gamePhase = 1;
        updatePhase(gamePhase);
      } else if (inputNameField.value == "") {
        console.log("enter name!");
      }

      //else display a red border around the input field
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
