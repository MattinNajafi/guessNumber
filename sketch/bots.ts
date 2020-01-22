let lastGuess: number;
let currentBotGuess: number;

class Bots {
  public lastGuess: number;
  public numberInput: number;
  public currentBotGuess: number;

  constructor(
    lastGuess: number,
    numberInput: number,
    currentBotGuess: number = Math.ceil(Math.random() * 100)
  ) {
    this.lastGuess = lastGuess;
    this.numberInput = numberInput;
    this.currentBotGuess = currentBotGuess;
  }
}

class Easy extends Bots {
  public botGuess(): number {
    return this.currentBotGuess;
  }
}

