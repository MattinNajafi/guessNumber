class KeyEvents {
  public submitYourGuess(
    computer: any,
    gamePhase: number,
    yourTurn: boolean,
    bot: any
  ): void {
    let playerGuessInput: any = document.querySelector(".player-input");
    let playerGuess: number;
    let guesslist: Array<number> = [];

    if (yourTurn) {
      document.addEventListener("keypress", (e): void => {
        if (e.key === "Enter" && !(playerGuessInput.value == "")) {
          // document.querySelector(".player-message")
          playerGuess = parseInt(playerGuessInput.value);
          guesslist.push(playerGuess);

          playerGuessInput.value = "";
          yourTurn = false;
          console.log(yourTurn);

          computer.checkNumber(playerGuess, gamePhase, yourTurn);

          // bot.easy();
          // bot.medium(computer);
          bot.hard(computer);
        }
      });
    }
  }
}
