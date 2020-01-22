// explanation of game phase
// gamePhase = 0 = display name-input, game has not started
// gamePhase = 1 = display main menu, game has not started
// gamePhase = 2 = display game area, game has started
// gamePhase = 3 = display game results, game has ended 

// global variables
let gamePhase: number;

window.addEventListener("load", init);

gamePhase = 0;

function init(): void {
  setupEventListenersClick();

  const guessSpan: number = 20; //make the user choose this with a range or dropdown

  // let instructions = new Instructions()
  let numberGenerator = new NumberGenerator();
  let rng = numberGenerator.random(guessSpan);
  console.log(rng);


}

function setupEventListenersClick() {
    toggleInstructions();
    submitNamePlayer();
    
}

function submitNamePlayer() {
  let submitNamePlayerButton: any = document.querySelector(".submitNamePlayer")

//Function when user click on submit -enter gamePhase 2 and see the gameMenu
  submitNamePlayerButton.addEventListener("click", function() {
    //insert code that show the gameMenu --> gamePhase === 1
    
    //test code, should be deleted later
    submitNamePlayerButton.style.display = "none"
    
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
    

