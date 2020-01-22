class NumberGenerator {   
    random(guessSpan:number):number {
        let randomNumber: number = Math.ceil(Math.random() * guessSpan)
        return randomNumber
    }
}



