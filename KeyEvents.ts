class KeyEvents {
  public submitYourGuess(): void {
    const computer = new CPU();

    let playerGuessInput: any = document.querySelector(".player-input");
    let playerGuess: number;
    document.addEventListener("keypress", function(e): void {
      if (e.key === "Enter" && !(playerGuessInput.value == "")) {
        playerGuess = playerGuessInput.value;
        computer.checkNumber(playerGuess);
      }
    });
  }
}
