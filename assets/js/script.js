$(".play-image").click(function(){
    if (id==="rock") {
        $("#player-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if (id==="paper") {
        $("#player-move").css("background-image", "url('assets/images/paper.jpg')");
    } else if (id==="scissors") {
        $("#player-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else {
        $("#player-move").css("background-image", "none");
    }
});

/*$(".play-image").hover(function(){
    $("h2").css("background", "lightblue");
});*/




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