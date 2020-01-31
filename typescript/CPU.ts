class CPU {
  public correctAnswer: number;
  public lowerList: Array<Number>;
  public higherList: Array<Number>;
  public info: string;
  public guessSpan: number;

  constructor(guessSpan: number) {
    this.guessSpan = guessSpan;

    this.lowerList = [];
    this.higherList = [];
    this.correctAnswer = this.setAwnser();
    console.log(this.correctAnswer);
    this.info = "";
  }

  //Checks guesses from both bot and player and returns the result
  public checkNumber(guess: number, gamePhase: number, turn: boolean): void {
    let botMessage: any = document.querySelector(".bot-message");
    let playerMessage: any = document.querySelector(".player-message");
    let botGuess: any = document.querySelector(".bot-guess");
    let playerGuess: any = document.querySelector(".player-guess");
    let playerImg: any = document.querySelector(".playerImg");
    let botImg: any = document.querySelector(".botImgs");

    if (turn) {
      playerImg.style.display = "block";
      botGuess.textContent = "Bobot guess :" + guess;
      if (
        guess == this.correctAnswer &&
        !(
          (document.querySelector(".conclusion") as HTMLHeadingElement)
            .innerText ===
          "You guessed" + " " + this.correctAnswer + " " + "and won!"
        )
      ) {
        console.log("Bot wins!");
        (document.querySelector(
          ".conclusion"
        ) as HTMLHeadingElement).innerText =
          "Bobot guessed" + " " + this.correctAnswer + " " + "and won!";
        gamePhase = 3;
        updatePhase(3)
      } else if (guess < this.correctAnswer) {
        botMessage.textContent = "TOO LOW!";
        this.lowerList.push(guess);
      } else if (guess > this.correctAnswer) {
        botMessage.textContent = "TOO HIGH!";
        this.higherList.push(guess);
      }
    }
    if (!turn) {
      botImg.style.display = "block";
      playerGuess.textContent = "You guess :" + guess;
      if (guess == this.correctAnswer) {
        (document.querySelector(
          ".conclusion"
        ) as HTMLHeadingElement).innerText =
          "You guessed" + " " + this.correctAnswer + " " + "and won!";

        gamePhase = 3;
        console.log("You win!");
        updatePhase(gamePhase);
        savePlayerScore(this.higherList, this.lowerList)
      } else if (guess < this.correctAnswer) {
        playerMessage.textContent = "TOO LOW!";
        this.lowerList.push(guess);
        this.info = "low";
      } else if (guess > this.correctAnswer) {
        playerMessage.textContent = "TOO HIGH!";
        this.higherList.push(guess);
        this.info = "high";
      }
    }
  }

  //Sets the correct answer
  public setAwnser() {
    let generator = new NumberGenerator();
    let correctAnswer = generator.random(100);

    return correctAnswer;
  }
}
