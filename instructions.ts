let button:HTMLButtonElement = document.getElementById("help") as HTMLButtonElement;
let closebtn:HTMLDivElement = document.getElementsByClassName("close")[0] as HTMLDivElement;

button.addEventListener('click', showHelp)
closebtn.addEventListener('click', hideHelp)
let modal:HTMLDivElement = document.getElementById("popupDiv") as HTMLDivElement;


function showHelp(): void{
    modal.style.display = "block";
}

function hideHelp(): void {
    modal.style.display = "none";
  }