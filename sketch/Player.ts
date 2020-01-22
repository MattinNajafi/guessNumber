function playerInput(){
    let playerName: any = document.getElementById("inputPlayerName")
    if(playerName.value != ""){
      saveToLocalStorage()
      gamePhase = 1;
      phaseZeroDiv.style.display = "none"
      phaseOneDiv.style.display = "flex"
    }
    else{
      playerName.style.border = "1px solid red"
    }
}

function saveToLocalStorage(){
    let playerName: any = document.getElementById("inputPlayerName")
    let playerNameValue: string = playerName.value
    localStorage.setItem("name", playerNameValue)
}
