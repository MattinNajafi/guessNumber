// explanation of game phase
// gamePhase = 0 = display start page, game has not started
// gamePhase = 1 = display game menu, game has not started
// gamePhase = 2 = display game area, game has started
// gamePhase = 3 = display game results, game has ended

//On windowload run game
window.addEventListener("load", init);

//Initiate game
function init(): void { 
  let gamePhase: number = 0; //start phase
  let guessSpan: number = 100; //play from 0 - 100
  let yourTurn: boolean = true; //whos turn it is
  
  let guessList: Array<number> = []; //shall be removed??
  
  const whatBot: number = Math.floor(Math.random() * 3); //randomize what bot you face
  
  let computer = new CPU(guessSpan);
  const keyEvents = new KeyEvents();
  const clickEvents = new ClickEvents();
  const bot = new Bot(computer, yourTurn);

  // Initiate clickevents
  clickEvents.toggleInstructions();
  clickEvents.submitPlayerName(gamePhase);
  clickEvents.startGame(gamePhase);
  clickEvents.submitGuess(
    computer,
    gamePhase,
    yourTurn,
    bot,
    guessList,
    whatBot
  );
  clickEvents.playAgain();

  // Initiate keyevents
  keyEvents.submitGuess(computer, gamePhase, yourTurn, bot, guessList, whatBot);


  updatePhase(gamePhase);

  setInputFilter(
    document.getElementById("intLimitTextBox"),
    (value: string) => {
      return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 100);
    }
  );
}

// Phases
function updatePhase(gamePhase: number): void {
  let phase_0: any = document.querySelector(".phase-0");
  let phase_1: any = document.querySelector(".phase-1");
  let phase_2: any = document.querySelector(".phase-2");
  let phase_3: any = document.querySelector(".phase-3");

  // Input name
  if (gamePhase == 0) {
    phase_0.style.display = "block";
    phase_1.style.display = "none";
    phase_2.style.display = "none";
    phase_3.style.display = "none";

    // Main menu
  } else if (gamePhase == 1) {
    phase_0.style.display = "none";
    phase_1.style.display = "block";
    phase_2.style.display = "none";
    phase_3.style.display = "none";

    //Game phase
  } else if (gamePhase == 2) {
    phase_0.style.display = "none";
    phase_1.style.display = "none";
    phase_2.style.display = "block";
    phase_3.style.display = "none";

    (document.querySelector(".player-input") as HTMLInputElement).focus(); //focus on the input field

    //Win or loose page and highscore list
  } else if (gamePhase == 3) {
    phase_0.style.display = "none";
    phase_1.style.display = "none";
    phase_2.style.display = "none";
    phase_3.style.display = "flex";
  }
}

function setInputFilter(textbox: any, inputFilter: any) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop"
  ].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(textbox.value)) {
        textbox.oldValue = textbox.value;
        textbox.oldSelectionStart = textbox.selectionStart;
        textbox.oldSelectionEnd = textbox.selectionEnd;
      } else if (textbox.hasOwnProperty("oldValue")) {
        textbox.value = textbox.oldValue;
        textbox.setSelectionRange(
          textbox.oldSelectionStart,
          textbox.oldSelectionEnd
        );
      } else {
        textbox.value = "";
      }
    });
  });
}
