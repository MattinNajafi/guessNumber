class Bot {
  public CPUinfo: string;
  public botGuess: number;

  private under: number | any;
  private over: number | any;
  private computer: any;
  private yourTurn: boolean;

  constructor(computer: CPU, yourTurn: boolean) {
    this.computer = computer;
    this.yourTurn = yourTurn;

    this.CPUinfo = computer.info;
    this.botGuess = 0;
  }

  //
  public easy() {
    this.botGuess = Math.random() * 100;
    console.log("easy Bot guessing : " + this.botGuess);
    this.computer.checkNumber(Math.floor(this.botGuess), 2, this.yourTurn);
  }
  public medium(computer: any) {
    if (computer.higherList.length > 0) {
      this.under = computer.higherList.sort()[0];
    } else {
      this.under = 100;
    }
    if (computer.lowerList.length > 0) {
      this.over = computer.lowerList.sort()[computer.lowerList.length - 1];
    } else {
      this.over = 0;
    }

    this.botGuess = this.over + Math.random() * (this.under - this.over);
    console.log("medium Bot guessing : " + this.botGuess);

    this.computer.checkNumber(Math.floor(this.botGuess), 2, this.yourTurn);
  }
  public hard(computer: any) {
    

    if (computer.higherList.length > 0) {
      this.under = computer.higherList.sort(this.sortNumber)[0];
    } else {
      this.under = 100;
    }
    if (computer.lowerList.length > 0) {
      this.over = computer.lowerList.sort(this.sortNumber)[computer.lowerList.length - 1];
    } else {
      this.over = 0;
    }
    console.log("over :" + this.under);
    console.log("under :" + this.over);

    this.botGuess = this.over + (this.under - this.over) / 2;

    console.log("hard Bot guessing : " + this.botGuess);

    this.computer.checkNumber(Math.floor(this.botGuess), 2, this.yourTurn);
  }

  public sortNumber(a: any, b: any): number {
    return a - b;
  }
}
