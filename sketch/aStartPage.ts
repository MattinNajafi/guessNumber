let submitNamePlayerButton: any = document.querySelector(".submitPlayerName")

// explanation of game phase
// gamePhase = 0 = display start page, game has not started
let phaseZeroDiv: any = document.querySelector(".phase-0")
phaseZeroDiv.style.display = "flex"

// gamePhase = 1 = display game menu, game has not started
let phaseOneDiv : any = document.querySelector(".phase-1")
phaseOneDiv.style.display = "none"

// gamePhase = 2 = display game area, game has started
let phaseTwoDiv : any = document.querySelector(".phase-2")
phaseOneDiv.style.display = "none"

// gamePhase = 3 = display game results, game has ended 
let phaseThreeDiv : any = document.querySelector(".phase-3")
phaseOneDiv.style.display = "none"

window.addEventListener("load", init);
let gamePhase: number;


function init(): void {
  gamePhase = 0;
  console.log("gamePhase:" +gamePhase)
  const guessSpan: number = 20; //make the user choose this with a range or dropdown
  // let instructions = new Instructions()
  let numberGenerator = new NumberGenerator();
  let rng = numberGenerator.random(guessSpan);
  console.log(rng);
  
}


//Function when user click on submit 
  submitNamePlayerButton.addEventListener("click", playerInput) 
  
// function when user clikc on help
  let toggleBtn: any = document.querySelector(".toggle-btn");
  toggleBtn.addEventListener("click", helpButtonToggle)

// function when user click on Play Game
  let startGame: any = document.getElementById("playBtn")
  startGame.addEventListener("click", gameStarter)

