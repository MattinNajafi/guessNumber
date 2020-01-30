function saveToLocalStorage(){
    let playerName: any = document.querySelector(".inputNameField")
    let playerNameValue: string = playerName.value
    localStorage.setItem("name", playerNameValue)
}