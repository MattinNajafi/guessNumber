class Instructions {
  button: HTMLButtonElement;
  closebtn: HTMLDivElement;
  modal: HTMLDivElement;
  // let button:HTMLButtonElement = document.getElementById("help") as HTMLButtonElement;
  // let closebtn:HTMLDivElement = document.getElementsByClassName("close")[0] as HTMLDivElement;
  // let modal:HTMLDivElement = document.getElementById("popupDiv") as HTMLDivElement;

  constructor(
    button: HTMLButtonElement,
    closebtn: HTMLDivElement,
    modal: HTMLDivElement
  ) {
    this.button = button;
    this.closebtn = closebtn;
    this.modal = modal;
  }

  public showHelp(): void {
    this.button.addEventListener("click", this.showHelp);
    this.modal.style.display = "block";
    console.log("edfrgthyg");
  }

  public hideHelp(): void {
    this.closebtn.addEventListener("click", this.hideHelp);
    this.modal.style.display = "none";
  }
}
