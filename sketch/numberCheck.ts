let numberInput: number;
let message: HTMLBodyElement;
let guess: number;

class NumberCheck {
  public numberInput = document.querySelector(".numberInput");
  public message = document.querySelector(".message");

  public checkNumber(): void {
    guess = Number(numberInput);

    if (numberInput == randomNumber) {
      message.textContent = "YOU WIN!";
    } else if (numberInput < randomNumber) {
      message.textContent = "TOO LOW!";
    } else if (numberInput > randomNumber) {
      message.textContent = "TOO HIGH!";
    }
  }
}
