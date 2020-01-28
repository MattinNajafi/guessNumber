function savePlayer() {
    let savePlayerName: any = document.querySelector(".inputNameField")
    let playerNameValue: string = savePlayerName.value
    let score: number = 5
    localStorage.setItem("hiscore", JSON.stringify([playerNameValue, score]))  
}
function hiScoreList() {
    let nameAndScore = JSON.parse(localStorage.getItem("hiscore") as string)
    console.log(nameAndScore) 
}



    // document.querySelector(".playername1").innerHTML = '1.  ' + playerName + '  500'
    // document.querySelector(".playername2").innerHTML = '2.  ' + playerName + '  400' 
    // document.querySelector(".playername3").innerHTML = '3.  ' + playerName + '  300' 
    // document.querySelector(".playername4").innerHTML = '4.  ' + playerName + '  200' 
    // document.querySelector(".playername5").innerHTML = '5.  ' + playerName + '  100' 


// class ScoreTable {

//     private scoreTable: Array<Player>
//     private listItemInPlayerTable: string

//     constructor() {
//         this.listItemInPlayerTable = ''
//         if (localStorage.getItem('scoretable') === null) {
//             this.scoreTable = new Array
//         } else {
//             this.scoreTable = JSON.parse(localStorage.getItem('scoretable') as string)
//         }
//         this.playerTable()
//     }

//     /**
//      * Draws the score table
//      */
//     public draw() {

//         fill('white')
//         text(this.listItemInPlayerTable, (width * 0.15), (height / 2))
//         textSize(25)
//         fill('green')
//         if (localStorage.getItem('scoretable') !== null) {
//             text('Highest Score', (width * 0.15), (height / 3 + 10))
//         }
//     }

//     /**
//      * Adds the player to the score table. 
//      * @param {string} name players name
//      * @param {number} score players score
//      */
//     public addPlayer(name: string, score: number) {
//         let player = new Player(name, score)
//         this.scoreTable.push(player)
//     }

//     /**
//      * Saves the score table.
//      */
//     public saveScoreTable() {
//         localStorage.setItem('scoretable', JSON.stringify(this.scoreTable))
//     }

//     /**
//      * Sorts the score table, from highest score to lowest. 
//      */
//     public playerTable() {
//         const sortedListOfPlayers = this.scoreTable.sort((player1: Player, player2: Player) => {
//             return player2.playerScore - player1.playerScore
//         });

//         // The 5 players with the highest score is shown in the table. 
//         this.listItemInPlayerTable = ''
//         let placeInList = 1
//         for (let player of sortedListOfPlayers) {
//             if (placeInList <= 5) {
//                 this.listItemInPlayerTable += placeInList + '. ' + player.playerName + ' : ' + player.playerScore + '\n'
//                 placeInList++
//             }
//         }
//     }
// }

// class Player {
//     playerName: string
//     playerScore: number

//     constructor(name: string, score: number) {
//         this.playerName = name,
//             this.playerScore = score
//     }
// }
