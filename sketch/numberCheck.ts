let numberInput: number;
let message: HTMLBodyElement; 
let playerGuess: number;
let numberInputSubmit: any;


class NumberCheck {
    public numberInput = document.querySelector(".numberInput");
    public message = document.querySelector(".message");
    public numberInputSubmit = document.querySelector(".numberInputSubmit")

    public getEventListener() {
        numberInputSubmit.addEventListener("click", this.checkNumber)
        console.log("hej")
    }


    public checkNumber(randomNumber: number): void {
    playerGuess = Number(numberInput);


        if (numberInput == randomNumber) {
           message.textContent = "YOU WIN!"
        }

        else if (numberInput < randomNumber) {
            message.textContent = "TOO LOW!"
        }

        else if (numberInput > randomNumber) {
            message.textContent = "TOO HIGH!"
        }


 console.log("hej")

    
    if (numberInput == randomNumber) {
      message.textContent = "YOU WIN!";
    } else if (numberInput < randomNumber) {
      message.textContent = "TOO LOW!";
    } else if (numberInput > randomNumber) {
      message.textContent = "TOO HIGH!";
    }
  }
}
