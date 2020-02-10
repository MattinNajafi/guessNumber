"use strict";
var Bot = (function () {
    function Bot(computer, yourTurn) {
        this.computer = computer;
        this.yourTurn = yourTurn;
        this.CPUinfo = computer.info;
        this.botGuess = 0;
    }
    Bot.prototype.easy = function () {
        this.botGuess = Math.random() * 100;
        console.log("easy Bot guessing : " + this.botGuess);
        this.computer.checkNumber(Math.floor(this.botGuess), 2, this.yourTurn);
    };
    Bot.prototype.medium = function (computer) {
        if (computer.higherList.length > 0) {
            this.under = computer.higherList.sort()[0];
        }
        else {
            this.under = 100;
        }
        if (computer.lowerList.length > 0) {
            this.over = computer.lowerList.sort()[computer.lowerList.length - 1];
        }
        else {
            this.over = 0;
        }
        this.botGuess = this.over + Math.random() * (this.under - this.over);
        console.log("medium Bot guessing : " + this.botGuess);
        this.computer.checkNumber(Math.floor(this.botGuess), 2, this.yourTurn);
    };
    Bot.prototype.hard = function (computer) {
        if (computer.higherList.length > 0) {
            this.under = computer.higherList.sort(this.sortNumber)[0];
        }
        else {
            this.under = 100;
        }
        if (computer.lowerList.length > 0) {
            this.over = computer.lowerList.sort(this.sortNumber)[computer.lowerList.length - 1];
        }
        else {
            this.over = 0;
        }
        console.log("over :" + this.under);
        console.log("under :" + this.over);
        this.botGuess = this.over + (this.under - this.over) / 2;
        console.log("hard Bot guessing : " + this.botGuess);
        this.computer.checkNumber(Math.floor(this.botGuess), 2, this.yourTurn);
    };
    Bot.prototype.sortNumber = function (a, b) {
        return a - b;
    };
    return Bot;
}());
var CPU = (function () {
    function CPU(guessSpan) {
        this.guessSpan = guessSpan;
        this.lowerList = [];
        this.higherList = [];
        this.correctAnswer = this.setAwnser();
        console.log(this.correctAnswer);
        this.info = "";
    }
    CPU.prototype.checkNumber = function (guess, gamePhase, turn) {
        var botMessage = document.querySelector(".bot-message");
        var playerMessage = document.querySelector(".player-message");
        var botGuess = document.querySelector(".bot-guess");
        var playerGuess = document.querySelector(".player-guess");
        var playerImg = document.querySelector(".playerImg");
        var botImg = document.querySelector(".botImgs");
        if (turn) {
            playerImg.style.display = "block";
            botGuess.textContent = "Bobot guess :" + guess;
            if (guess == this.correctAnswer &&
                !(document.querySelector(".conclusion")
                    .innerText ===
                    "You guessed" + " " + this.correctAnswer + " " + "and won!")) {
                console.log("Bot wins!");
                document.querySelector(".conclusion").innerText =
                    "Bobot guessed" + " " + this.correctAnswer + " " + "and won!";
                gamePhase = 3;
                updatePhase(3);
            }
            else if (guess < this.correctAnswer) {
                botMessage.textContent = "TOO LOW!";
                this.lowerList.push(guess);
            }
            else if (guess > this.correctAnswer) {
                botMessage.textContent = "TOO HIGH!";
                this.higherList.push(guess);
            }
        }
        if (!turn) {
            botImg.style.display = "block";
            playerGuess.textContent = "You guess :" + guess;
            if (guess == this.correctAnswer) {
                document.querySelector(".conclusion").innerText =
                    "You guessed" + " " + this.correctAnswer + " " + "and won!";
                gamePhase = 3;
                console.log("You win!");
                updatePhase(gamePhase);
                savePlayerScore(this.higherList, this.lowerList);
            }
            else if (guess < this.correctAnswer) {
                playerMessage.textContent = "TOO LOW!";
                this.lowerList.push(guess);
                this.info = "low";
            }
            else if (guess > this.correctAnswer) {
                playerMessage.textContent = "TOO HIGH!";
                this.higherList.push(guess);
                this.info = "high";
            }
        }
    };
    CPU.prototype.setAwnser = function () {
        var generator = new NumberGenerator();
        var correctAnswer = generator.random(100);
        return correctAnswer;
    };
    return CPU;
}());
var ClickEvents = (function () {
    function ClickEvents() {
    }
    ClickEvents.prototype.playAgain = function () {
        var playAgain = document.getElementById("restart");
        playAgain.addEventListener("click", function () {
            location.reload();
        });
    };
    ClickEvents.prototype.toggleInstructions = function () {
        var toggleBtn = document.querySelector(".toggle-btn");
        var content = document.querySelector(".instructions .content");
        var open = false;
        toggleBtn.addEventListener("click", function () {
            if (!open) {
                content.style.display = "block";
                open = true;
            }
            else if (open) {
                content.style.display = "none";
                open = false;
            }
        });
    };
    ClickEvents.prototype.submitPlayerName = function (gamePhase) {
        var submitNameButton = document.querySelector(".submitNameButton");
        var inputNameField = document.querySelector(".inputNameField");
        gamePhase = gamePhase;
        inputNameField.focus();
        var functionForSubmitButton;
        functionForSubmitButton;
        submitNameButton.addEventListener("click", functionForSubmitButton = function (gamePhase) {
            if (!(inputNameField.value == "")) {
                gamePhase = 1;
                updatePhase(gamePhase);
            }
            else if (inputNameField.value == "") {
                console.log("enter name!");
            }
        });
    };
    ClickEvents.prototype.submitGuess = function (computer, gamePhase, yourTurn, bot, guesslist, whatBot) {
        var playerGuessInput = document.querySelector(".player-input");
        var playerGuess;
        if (yourTurn) {
            document.addEventListener("click", function () {
                if (!(playerGuessInput.value == "")) {
                    playerGuess = parseInt(playerGuessInput.value);
                    guesslist.push(playerGuess);
                    playerGuessInput.value = "";
                    yourTurn = false;
                    console.log(yourTurn);
                    computer.checkNumber(playerGuess, gamePhase, yourTurn);
                    if (whatBot === 0) {
                        bot.easy();
                    }
                    else if (whatBot === 1) {
                        bot.medium(computer);
                    }
                    else if (whatBot === 2) {
                        bot.hard(computer);
                    }
                }
            });
        }
    };
    ClickEvents.prototype.startGame = function (gamePhase) {
        var startGameButton = document.querySelector(".startGameButton");
        gamePhase = gamePhase;
        startGameButton.addEventListener("click", function (gamePhase) {
            gamePhase = 2;
            updatePhase(gamePhase);
        });
    };
    return ClickEvents;
}());
window.addEventListener("load", init);
function init() {
    var gamePhase = 0;
    var guessSpan = 100;
    var yourTurn = true;
    var guessList = [];
    var whatBot = Math.floor(Math.random() * 3);
    var computer = new CPU(guessSpan);
    var keyEvents = new KeyEvents();
    var clickEvents = new ClickEvents();
    var bot = new Bot(computer, yourTurn);
    clickEvents.toggleInstructions();
    clickEvents.submitPlayerName(gamePhase);
    clickEvents.startGame(gamePhase);
    clickEvents.submitGuess(computer, gamePhase, yourTurn, bot, guessList, whatBot);
    clickEvents.playAgain();
    keyEvents.submitGuess(computer, gamePhase, yourTurn, bot, guessList, whatBot);
    updatePhase(gamePhase);
    setInputFilter(document.getElementById("intLimitTextBox"), function (value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 100);
    });
}
function updatePhase(gamePhase) {
    var phase_0 = document.querySelector(".phase-0");
    var phase_1 = document.querySelector(".phase-1");
    var phase_2 = document.querySelector(".phase-2");
    var phase_3 = document.querySelector(".phase-3");
    if (gamePhase == 0) {
        phase_0.style.display = "block";
        phase_1.style.display = "none";
        phase_2.style.display = "none";
        phase_3.style.display = "none";
    }
    else if (gamePhase == 1) {
        phase_0.style.display = "none";
        phase_1.style.display = "block";
        phase_2.style.display = "none";
        phase_3.style.display = "none";
    }
    else if (gamePhase == 2) {
        phase_0.style.display = "none";
        phase_1.style.display = "none";
        phase_2.style.display = "block";
        phase_3.style.display = "none";
        document.querySelector(".player-input").focus();
    }
    else if (gamePhase == 3) {
        phase_0.style.display = "none";
        phase_1.style.display = "none";
        phase_2.style.display = "none";
        phase_3.style.display = "flex";
    }
}
function setInputFilter(textbox, inputFilter) {
    [
        "input",
        "keydown",
        "keyup",
        "mousedown",
        "mouseup",
        "select",
        "contextmenu",
        "drop"
    ].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(textbox.value)) {
                textbox.oldValue = textbox.value;
                textbox.oldSelectionStart = textbox.selectionStart;
                textbox.oldSelectionEnd = textbox.selectionEnd;
            }
            else if (textbox.hasOwnProperty("oldValue")) {
                textbox.value = textbox.oldValue;
                textbox.setSelectionRange(textbox.oldSelectionStart, textbox.oldSelectionEnd);
            }
            else {
                textbox.value = "";
            }
        });
    });
}
var KeyEvents = (function () {
    function KeyEvents() {
    }
    KeyEvents.prototype.submitGuess = function (computer, gamePhase, yourTurn, bot, guessList, whatBot) {
        var playerGuessInput = document.querySelector(".player-input");
        var playerGuess;
        if (yourTurn) {
            document.addEventListener("keypress", function (e) {
                if (e.key === "Enter" && !(playerGuessInput.value == "")) {
                    playerGuess = parseInt(playerGuessInput.value);
                    guessList.push(playerGuess);
                    playerGuessInput.value = "";
                    yourTurn = false;
                    console.log(yourTurn);
                    computer.checkNumber(playerGuess, gamePhase, yourTurn);
                    if (whatBot === 0) {
                        bot.easy();
                    }
                    else if (whatBot === 1) {
                        bot.medium(computer);
                    }
                    else if (whatBot === 2) {
                        bot.hard(computer);
                    }
                }
            });
        }
    };
    return KeyEvents;
}());
var NumberGenerator = (function () {
    function NumberGenerator() {
    }
    NumberGenerator.prototype.random = function (guessSpan) {
        var randomNumber = Math.ceil(Math.random() * guessSpan);
        return randomNumber;
    };
    return NumberGenerator;
}());
function savePlayerScore(higherList, lowerList) {
    var _a;
    var getNameAndScore;
    var savePlayerName = document.querySelector(".inputNameField");
    var playerName = savePlayerName.value;
    if (localStorage.getItem('hiscore') === null) {
        getNameAndScore = [];
    }
    else {
        getNameAndScore = JSON.parse(localStorage.getItem("hiscore"));
    }
    var score = (Number(higherList.length) + Number(lowerList.length)) / 2 + 1;
    var hiScoreList = { name: playerName, score: score };
    getNameAndScore.push(hiScoreList);
    getNameAndScore.sort(function (a, b) { return (a.score - b.score); });
    for (var i = 0; i < getNameAndScore.length; i++) {
        var listElement = document.createElement("li");
        var listItem = document.createTextNode(getNameAndScore[i].name + " - score: " + getNameAndScore[i].score);
        listElement.appendChild(listItem);
        (_a = document.getElementById("highScore")) === null || _a === void 0 ? void 0 : _a.appendChild(listElement);
        if (i === 9) {
            break;
        }
    }
    localStorage.setItem("hiscore", JSON.stringify(getNameAndScore));
}
//# sourceMappingURL=bundle.js.map