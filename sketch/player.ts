function saveToLocalStorage(){
    let playerName: any = document.getElementById("inputPlayerName")
    let playerNameValue: string = playerName.value
    localStorage.setItem("name", playerNameValue)
}