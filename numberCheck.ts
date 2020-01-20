let numberInput: number;
let message: HTMLBodyElement; 
let guess: number;

class NumberChecks {
    public numberInput = document.querySelector(".numberInput");
    public message = document.querySelector(".message");
    
public checkNumber() {
    guess = Number(numberInput);

        if (numberInput === randomNumber) {
           message.textContent = "YOU WON!"
        }

        else if (numberInput < randomNumber) {
            message.textContent = "TOO LOW!"
        }

        else if (numberInput > randomNumber) {
            message.textContent = "TOO HIGH!"
        }


    
}


}