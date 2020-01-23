class EventListenersClick {
  public toggleInstructions(): void {
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
    let spanLabels: any = document.querySelectorAll(".adjust-span label");
    let guessSpan: number = parseInt(
      document.querySelector(".adjust-span .checked-label input").value
    );

    for (let i = 0; i < spanRadios.length; i++) {
      spanRadios[i].addEventListener("input", function(
        guessSpan: string | number
      ) {
        for (let j = 0; j < spanRadios.length; j++) {
          if (!spanRadios[j].checked) {
            spanLabels[j].classList.remove("checked-label");
          }
        }
        if (spanRadios[i].checked) {
          spanLabels[i].classList.add("checked-label");
          guessSpan = parseInt(spanRadios[i].value);
          console.log("1 : " + guessSpan);
        }
        console.log("2 : " + guessSpan);
      });
      console.log("3 : " + guessSpan);
    }
    console.log("4 : " + guessSpan);
    return guessSpan;
  }

  public testButton(logtext: number | string) {
    let testButton = document.querySelector(".TEST");
    testButton.addEventListener("click", function() {
      console.log(logtext);
    });
  }
}
