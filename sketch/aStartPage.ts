// explanation of game phase
// gamePhase = 0 = display start page, game has not started
// gamePhase = 1 = display game menu, game has not started
// gamePhase = 2 = display game area, game has started
// gamePhase = 3 = display game results, game has ended 

window.addEventListener("load", init);
let gamePhase: number;

function init(): void {

  gamePhase = 0;
  console.log("gamePhase:" +gamePhase)
  setupEventListenersClick();

  const guessSpan: number = 20; //make the user choose this with a range or dropdown

  // let instructions = new Instructions()
  let numberGenerator = new NumberGenerator();
  let rng = numberGenerator.random(guessSpan);
  console.log(rng);

  let checkPlayerGuess = new NumberCheck();
  

  let easyBot = new Easy(lastGuess, numberInput, currentBotGuess);
  console.log(easyBot.currentBotGuess)


}

function setupEventListenersClick() {
    toggleInstructions();
    submitPlayerName();
    
}

//Function when user click on submit 
function submitPlayerName() {
  let submitNamePlayerButton: any = document.querySelector(".submitPlayerName")
  let phaseZeroDiv: any = document.querySelector(".phase-0")
  let phaseOneDiv : any = document.querySelector(".phase-1")

  submitNamePlayerButton.addEventListener("click", function() {
    //insert if/else statement
    //if the player enters their name --> function for gamePhase === 1
    gamePhase = 1;
    console.log("gamePhase:" +gamePhase)
    phaseZeroDiv.style.display = "none"
    phaseOneDiv.style.display = "block"
    //else display a red border around the input field
  })
}

function toggleInstructions() {
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
    

