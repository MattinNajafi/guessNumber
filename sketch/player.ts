function savePlayerScore() {
    let getNameAndScore;
    if (localStorage.getItem('hiscore') === null) {
        getNameAndScore = [];
    } else {
        getNameAndScore = JSON.parse(localStorage.getItem("hiscore") as string)

    }
    let savePlayerName: any = document.querySelector(".inputNameField")
    let playerNameValue: string = savePlayerName.value
    let score: number = Math.floor(Math.random()* 100) 
    let hiScoreList: any = {name: playerNameValue, score: score}
    getNameAndScore.push(hiScoreList)
    getNameAndScore.sort(function(a: any,b: any) { return (a.score - b.score ) })
    //console.log(getNameAndScore[0].name + " - score: "+ getNameAndScore[0].score)
    for (let i = 0; i < getNameAndScore.length; i++) {
        console.log(getNameAndScore[i].name + " - score: "+ getNameAndScore[i].score)
        if (i === 4) {
            break;
        }
    }
    localStorage.setItem("hiscore", JSON.stringify(getNameAndScore))  
}

