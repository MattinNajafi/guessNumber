class CPU {
  public correctAnswer: number;
  public guessList: Array<Number>;

  constructor() {
    this.guessList = [];
    this.correctAnswer = this.setAwnser();
  }

  public checkNumber(guess: number): void {
    let message: any = document.querySelector(".message");
    this.guessList.push(guess);

    console.log(this.correctAnswer);

    if (guess == this.correctAnswer) {
      message.textContent = "YOU WIN!";
    } else if (guess < this.correctAnswer) {
      message.textContent = "TOO LOW!";
    } else if (guess > this.correctAnswer) {
      message.textContent = "TOO HIGH!";
    }
  }
  public setAwnser() {
    let generator = new NumberGenerator();
    let correctAnswer = generator.random(20);

    return correctAnswer;
  }
}
