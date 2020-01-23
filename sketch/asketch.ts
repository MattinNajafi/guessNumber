window.addEventListener("load", init);

function init(): void {
  let clickEvents = new EventListenersClick();

  const guessSpan: number = clickEvents.guessSpanRadios() //make the user choose this with a range or dropdown

  // this will be used by the CPU later
  let numberGenerator = new NumberGenerator();
  let rng = numberGenerator.random(guessSpan);
  console.log(rng);
}

class EventListenersClick {
  public toggleInstructions() {

      let toggleBtn: any = document.querySelector(".toggle-btn");
      let content: any = document.querySelector(".instructions .content");
      let open: Boolean = false;
      
      toggleBtn.addEventListener("click", function() {
        if (!open) {
          content.style.display = "block";
          open = true;
        } else if (open) {
          content.style.display = "none";
          open = false;
        }
      });
  }

  public guessSpanRadios(): number {
      let spanRadios: any = document.querySelectorAll(
        ".adjust-span input[type='radio']"
      );
      let spanLabels: any = document.querySelectorAll(
        ".adjust-span label"
      );
      let guessSpan: number = 20;
      
      for (let i = 0; i < spanRadios.length; i++) {
        spanRadios[i].addEventListener("input", function(guessSpan: string | number) {
          for (let j = 0; j < spanRadios.length; j++) {
            if (!spanRadios[j].checked) {
              spanLabels[j].classList.remove("checked-label");
            }
          }
      
          if (spanRadios[i].checked) {
            spanLabels[i].classList.add("checked-label");
            guessSpan = parseInt(spanRadios[i].value);
            console.log("Guess span is : 1 - " + guessSpan);
          }
        });
      }
      
      return guessSpan;

  }
}

function toggleInstructions() {
}

function guessSpanRadios() {
}
