class Bots {
  public lastGuess: number;
  public guessList: Array<number>;
  public info: string;

  constructor(
    lastGuess: number,
    guessList: Array<number>,
    info: string,
  ) {
    
    this.lastGuess = lastGuess;
    this.guessList = guessList;
    this.info = info;
  }
}

class Easy extends Bots {
  public botBehaviourEasy() {
  

  }
  
  
  public botGuess(): number {

  }
}

/* number = Math.ceil(Math.random() * 100)
 */