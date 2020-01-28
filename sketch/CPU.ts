class CPU {
  public correctAnswer: number;
  public guessList: Array<Number>;
  public info: string;

  constructor() {
    this.guessList = [];
    this.correctAnswer = this.setAwnser();
    this.info = "none";
  }

  public checkNumber(
    guess: number,
    gamePhase: number,
    yourTurn: boolean
  ): void {
    this.guessList.push(guess);
    let message: any = document.querySelector(".message");
    let score = this.guessList.length;

    console.log(this.correctAnswer);
    console.log(this.guessList);

    if (guess == this.correctAnswer && yourTurn) {
      console.log("Your score :" + score);

      gamePhase = 3;
      updatePhase(gamePhase);
    } else if (guess < this.correctAnswer) {
      message.textContent = "TOO LOW!";
      this.info = "low";
    } else if (guess > this.correctAnswer) {
      message.textContent = "TOO HIGH!";
      this.info = "high";
    }
  }
  public setAwnser() {
    let generator = new NumberGenerator();
    let correctAnswer = generator.random(20);
    console.log(correctAnswer);

    return correctAnswer;
  }
}
