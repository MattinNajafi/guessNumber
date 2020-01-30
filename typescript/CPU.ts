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

  public checkNumber(guess: number, gamePhase: number, turn: boolean): void {
    let botMessage: any = document.querySelector(".bot-message");
    let playerMessage: any = document.querySelector(".player-message");
    let botGuess: any = document.querySelector(".bot-guess");
    let playerGuess: any = document.querySelector(".player-guess");
    let score: number;
    let playerImg: any = document.querySelector(".playerImg")
    let botImg: any = document.querySelector(".botImgs")
    let guessList: Array<number> = [];

    if (turn) {
      playerImg.style.display = "block"
      botGuess.textContent = "Bobot guess :" + guess;
      if (
        guess == this.correctAnswer &&
        !(
          (document.querySelector(".conclusion") as HTMLHeadingElement)
            .innerText === "You win!"
        )
      ) {
        console.log("Bot wins!");
        (document.querySelector(
          ".conclusion"
        ) as HTMLHeadingElement).innerText = "Bobot guessed" + ' ' + this.correctAnswer + ' ' + "and won!";
        gamePhase = 3;
        updatePhase(gamePhase);
      } else if (guess < this.correctAnswer) {
        botMessage.textContent = "TOO LOW!";
        this.lowerList.push(guess);
      } else if (guess > this.correctAnswer) {
        botMessage.textContent = "TOO HIGH!";
        this.higherList.push(guess);
      }
    }
    if (!turn) {
      botImg.style.display = "block"
      guessList.push(guess);
      playerGuess.textContent = "You guess :" + guess;
      console.log("guessList " + guessList);
      if (guess == this.correctAnswer) {
        (document.querySelector(
          ".conclusion"
        ) as HTMLHeadingElement).innerText = "You guessed" + ' ' + this.correctAnswer + ' ' + "and won!";

        score = guessList.length;
        gamePhase = 3;
        console.log("You win!");
        console.log("score :" + score);

        updatePhase(gamePhase);
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

    console.log(this.higherList);
    console.log(this.lowerList);
  }
  public setAwnser() {
    let generator = new NumberGenerator();
    let correctAnswer = generator.random(20);

    return correctAnswer;
  }
}