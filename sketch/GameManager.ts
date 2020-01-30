// explanation of game phase
// gamePhase = 0 = display start page, game has not started
// gamePhase = 1 = display game menu, game has not started
// gamePhase = 2 = display game area, game has started
// gamePhase = 3 = display game results, game has ended

window.addEventListener("load", init);

function init(): void {
  let gamePhase: number = 2;
  let guessSpan: number = 100; //make the user choose this with a range or dropdown
  let yourTurn: boolean = true;
  let guessList: Array<number> = [];
  let score: number = guessList.length

  const whatBot: number = Math.floor(Math.random() * 3);

  const clickEvents = new ClickEvents();
  const keyEvents = new KeyEvents();
  const computer = new CPU(guessSpan);
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
  clickEvents.testButton(guessList)

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

function updatePhase(gamePhase: number): void {
  let phase_0: any = document.querySelector(".phase-0");
  let phase_1: any = document.querySelector(".phase-1");
  let phase_2: any = document.querySelector(".phase-2");
  let phase_3: any = document.querySelector(".phase-3");

  if (gamePhase == 0) {
    phase_0.style.display = "block";
    phase_1.style.display = "none";
    phase_2.style.display = "none";
    phase_3.style.display = "none";

    // input name
  } else if (gamePhase == 1) {
    phase_0.style.display = "none";
    phase_1.style.display = "block";
    phase_2.style.display = "none";
    phase_3.style.display = "none";

    // main manu
    // choose bot
    // guessspan ??
    // play
  } else if (gamePhase == 2) {
    phase_0.style.display = "none";
    phase_1.style.display = "none";
    phase_2.style.display = "block";
    phase_3.style.display = "none";

    // game phase
    // guess if it's your turn
    // correct awnser = win
    // incorrect answer
  } else if (gamePhase == 3) {
    phase_0.style.display = "none";
    phase_1.style.display = "none";
    phase_2.style.display = "none";
    phase_3.style.display = "block";

    // show highscore
    // play again
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
    textbox.addEventListener(event, function(): void {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
