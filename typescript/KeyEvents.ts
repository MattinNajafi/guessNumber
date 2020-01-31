class KeyEvents {
  public submitGuess(
    computer: any,
    gamePhase: number,
    yourTurn: boolean,
    bot: any,
    guessList: Array<number>,
    whatBot: number
  ): void {
    let playerGuessInput: any = document.querySelector(".player-input");
    let playerGuess: number;

    //Makes "enter" a submit button
    if (yourTurn) {
      document.addEventListener("keypress", (e): void => {
        if (e.key === "Enter" && !(playerGuessInput.value == "")) {
          playerGuess = parseInt(playerGuessInput.value);
          guessList.push(playerGuess);

          playerGuessInput.value = "";
          yourTurn = false;
          console.log(yourTurn);

          computer.checkNumber(playerGuess, gamePhase, yourTurn);

          if (whatBot === 0) {
            bot.easy();
          } else if (whatBot === 1) {
            bot.medium(computer);
          } else if (whatBot === 2) {
            bot.hard(computer);
          }
        }
      });
    }
  }
}
