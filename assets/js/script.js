//hover effect for selecting image

$(".play-image").mouseenter(function(){
    $(this).css({"width": "210px", "height": "210px"});
});

$(".play-image").mouseleave(function(){
    $(this).css({"width": "200px", "height": "200px"});
});


//makes image of selected play appear in player box

$(".play-image").click(function(){
    if ($(this).attr("id")==="rock") {
        $("#player-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if ($(this).attr("id")==="paper") {
        $("#player-move").css("background-image", "url('assets/images/paper.jpg')");
    } else if ($(this).attr("id")==="scissors") {
        $("#player-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else {
        console.log("none");
        $("#player-move").css("background-image", "none");
    }
    runGame();
});

//The main game "loop", called when the player chooses their move

function runGame() {

    symbols = ["rock", "paper", "scissors"]
    var computerMove = symbols[Math.floor(Math.random()*symbols.length)];
    console.log(computerMove);

    if ($("#player-move").css("background-image")!=="none" && computerMove === "scissors") {
        $("#computer-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else if ($("#player-move").css("background-image")!=="none" && computerMove === "rock") {
        $("#computer-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if ($("#player-move").css("background-image")!=="none" && computerMove === "paper") {
        $("#computer-move").css("background-image", "url('assets/images/paper.jpg')");
    } else {
        $("#computer-move").css("background-image", "none");
    }

}

/*const SYMBOL_CONFIG = [
    {
        id: 'rock',
        name: 'Rock',
        imgSrc: '<assets/images/rock.jpg>',
        winsOver: 'scissors'
    },
    {
        id: 'paper',
        name: 'Paper',
        imgSrc: '<assets/images/paper.jpg>',
        winsOver: 'rock'
    },
    {
        id: 'scissors',
        name: 'Scissors',
        imgSrc: '<assets/images/scissors.jpg>',
        winsOver: 'paper'
    }
];


// takeUserChoice, getComputerChoice(randomly select any one), etc

function checkIfPlayerWins(playerChoice, computerChoice) {

    if(playerChoice === computerChoice) {
        // Show draw and do not increment any ones score
        return;
    }
    // playerChoice -> rock, computerChoice -> paper
    const playerChoiceConfig = SYMBOL_CONFIG.find(eachSymbolConfig => eachSymbolConfig.id === playerChoice);
    if(playerChoiceConfig.winsOver === computerChoice) {
        // Show player won
        playerScore++;
    } else {
         // Show computer won
         computerScore++;
    }
}*/