class KeyEvents {
  public submitYourGuess(computer: any, gamePhase: number, yourTurn: boolean): void {
    let playerGuessInput: any = document.querySelector(".player-input");
    let playerGuess: number;

    document.addEventListener("keypress", function(e): void {
      if (e.key === "Enter" && !(playerGuessInput.value == "")) {
        playerGuess = playerGuessInput.value;
        yourTurn = false;
        computer.checkNumber(playerGuess, gamePhase, yourTurn);
      }
    });
  }
}
