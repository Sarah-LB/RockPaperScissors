//Hover effect for selecting image

$(".play-image").mouseenter(function(){
    $(this).css({"width": "210px", "height": "210px"});
});

$(".play-image").mouseleave(function(){
    $(this).css({"width": "200px", "height": "200px"});
});


//Player's chosen symbol  and random computer symbol appear in play boxes

$(".play-image").click(function(){
    var playerMove;

    if ($(this).attr("id")==="rock") {
        $("#player-move").css("background-image", "url('assets/images/rock.jpg')");
        playerMove = 'rock';
    } else if ($(this).attr("id")==="paper") {
        $("#player-move").css("background-image", "url('assets/images/paper.jpg')");
        playerMove = 'paper';
    } else if ($(this).attr("id")==="scissors") {
        $("#player-move").css("background-image", "url('assets/images/scissors.jpg')");
        playerMove = 'scissors';
    } else {
        playerMove = "none";
    }
    
    symbols = ["rock", "paper", "scissors"]
    var computerMove = symbols[Math.floor(Math.random()*symbols.length)];

    if ($("#player-move").css("background-image")!=="none" && computerMove === "scissors") {
        $("#computer-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else if ($("#player-move").css("background-image")!=="none" && computerMove === "rock") {
        $("#computer-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if ($("#player-move").css("background-image")!=="none" && computerMove === "paper") {
        $("#computer-move").css("background-image", "url('assets/images/paper.jpg')");
        return;
    }

    checkWhoWins(playerMove, computerMove);

});




const SYMBOL_CONFIG = [
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


//Check who wins and increment scores

function checkWhoWins(playerChoice, computerChoice) {

    let playerScore = parseInt(document.getElementById("player-score").innerHTML);
    let computerScore = parseInt(document.getElementById("computer-score").innerHTML);
    let currentStreak = parseInt(document.getElementById("current-streak").innerHTML);

    if(playerChoice === computerChoice) {
        alert("It's a draw! Your streak continues!");
        currentStreak++;
        return;
    }
    const playerChoiceConfig = SYMBOL_CONFIG.find(eachSymbolConfig => eachSymbolConfig.id === playerChoice);
    if(playerChoiceConfig.winsOver === computerChoice) {
        alert("You won! Keep going to increase your streak! :D");
        playerScore++;
        currentStreak++;
    } else {
        alert("Oh no, you lost! Keep going, try again!");
         computerScore++;
         currentStreak = 0;
    }
}
