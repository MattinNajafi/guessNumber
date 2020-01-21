let button:HTMLButtonElement = document.getElementById("help") as HTMLButtonElement;
let closebtn:HTMLDivElement = document.getElementsByClassName("close")[0] as HTMLDivElement;

class Instruction {
    
    public button = document.addEventListener('click', this.showHelp)
    public closebtn = document.addEventListener('click', this.hideHelp)
    public modal:HTMLDivElement = document.getElementById("popupDiv") as HTMLDivElement;
    
    
    public showHelp(): void{
        this.modal.style.display = "block";
    }
    
    public hideHelp(): void {
        this.modal.style.display = "none";
      }


}