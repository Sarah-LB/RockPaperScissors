const SYMBOL_CONFIG = [
    {
        id: "rock",
        name: "Rock",
        imgSrc: "assets/images/rock.jpg",
        winsOver: "scissors",
    },
    {
        id: "paper",
        name: "Paper",
        imgSrc: "assets/images/paper.jpg",
        winsOver: "rock",
    },
    {
        id: "scissors",
        name: "Scissors",
        imgSrc: "assets/images/scissors.jpg",
        winsOver: "paper",
    },
];

//Player's chosen symbol appears in play boxes

function selectUserSymbol() {
    $("#player-move").css("background-image", "");
    $("#computer-move").css("background-image", "");

    var playerMove;

    if ($(this).attr("id") === "rock") {
        $("#player-move").css("background-image", "url('assets/images/rock.jpg')");
        playerMove = "rock";
    } else if ($(this).attr("id") === "paper") {
        $("#player-move").css("background-image", "url('assets/images/paper.jpg')");
        playerMove = "paper";
    } else if ($(this).attr("id") === "scissors") {
        $("#player-move").css("background-image", "url('assets/images/scissors.jpg')");
        playerMove = "scissors";
    } else {
        playerMove = "none";
    }

    runGame(playerMove);
}

//Computer symbol generated

function runGame(playerMove) {
    symbols = ["rock", "paper", "scissors"];
    var computerMove = symbols[Math.floor(Math.random() * symbols.length)];

    if (playerMove !== "none" && computerMove === "scissors") {
        $("#computer-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else if (playerMove !== "none" && computerMove === "rock") {
        $("#computer-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if (playerMove !== "none" && computerMove === "paper") {
        $("#computer-move").css("background-image", "url('assets/images/paper.jpg')");
    }

    decideWinner(playerMove, computerMove);
}

//Check who wins and increment scores

function decideWinner(playerChoice, computerChoice) {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);

    if (playerChoice === computerChoice) {
        setTimeout(function () {
            Swal.fire("It's a draw!").then(function () {
                $("#player-move").css("background-image", "");
                $("#computer-move").css("background-image", "");
            });
        }, 500);
        return;
    }
    const playerChoiceConfig = SYMBOL_CONFIG.find((eachSymbolConfig) => eachSymbolConfig.id === playerChoice);
    if (playerChoiceConfig.winsOver === computerChoice) {
        setTimeout(function () {
            Swal.fire("You won! Keep it up!").then(function () {
                $("#player-move").css("background-image", "");
                $("#computer-move").css("background-image", "");
            });
            document.getElementById("player-score").innerText = ++playerScore;
        }, 500);
    } else {
        setTimeout(function () {
            Swal.fire("Oh no, you lost! Try again!").then(function () {
                $("#player-move").css("background-image", "");
                $("#computer-move").css("background-image", "");
            });
            document.getElementById("computer-score").innerText = ++computerScore;
        }, 500);
    }
}

// Start again button to refresh scores

function refreshScore() {
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    $("#player-move").css("background-image", "");
    $("#computer-move").css("background-image", "");
}

function bindEvents() {
    $(".play-image").click(selectUserSymbol);
    $("#start-again").click(refreshScore);
    $("#restart").on("click", refreshScore);
}

$(document).on("DomContentLoaded", bindEvents());
