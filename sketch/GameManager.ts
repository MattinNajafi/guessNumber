// explanation of game phase
// gamePhase = 0 = display start page, game has not started
// gamePhase = 1 = display game menu, game has not started
// gamePhase = 2 = display game area, game has started
// gamePhase = 3 = display game results, game has ended

window.addEventListener("load", init);

function init(): void {
  let gamePhase: number = 0;
  const clickEvents = new ClickEvents();

  //Initiate clickevents
  clickEvents.submitPlayerName(gamePhase);
  clickEvents.toggleInstructions();
  clickEvents.testButton("TEST")
  clickEvents.guessSpanRadios()

  updatePhase(gamePhase);
}

function updatePhase(gamePhase: number): void {
  let phase_0: any = document.querySelector(".phase-0");
  let phase_1: any = document.querySelector(".phase-1");
  let phase_2: any = document.querySelector(".phase-2");
  let phase_3: any = document.querySelector(".phase-3");

  if (gamePhase == 0) {
    console.log(phase_0);
    phase_0.style.display = "block";
    phase_1.style.display = "none";
    phase_2.style.display = "none";
    phase_3.style.display = "none";
  } else if (gamePhase == 1) {
    console.log(phase_1);
    phase_0.style.display = "none";
    phase_1.style.display = "block";
    phase_2.style.display = "none";
    phase_3.style.display = "none";

  } else if (gamePhase == 2) {
    console.log(phase_2);
    phase_0.style.display = "none";
    phase_1.style.display = "none";
    phase_2.style.display = "block";
    phase_3.style.display = "none";
  } else if (gamePhase == 3) {
    console.log(phase_3);
    phase_0.style.display = "none";
    phase_1.style.display = "none";
    phase_2.style.display = "none";
    phase_3.style.display = "block";
  }

  const guessSpan: number = 20; //make the user choose this with a range or dropdown

  // let instructions = new Instructions()
  let numberGenerator = new NumberGenerator();
  let rng = numberGenerator.random(guessSpan);
  console.log(rng);
}
