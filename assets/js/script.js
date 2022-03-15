//Hover effect for selecting image

$(".play-image").mouseenter(function(){
    $(this).css({"width": "210px", "height": "210px"});
});

$(".play-image").mouseleave(function(){
    $(this).css({"width": "200px", "height": "200px"});
});


//Player's chosen symbol appears in player box

$(".play-image").click(function(){

    if ($(this).attr("id")==="rock") {
        $("#player-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if ($(this).attr("id")==="paper") {
        $("#player-move").css("background-image", "url('assets/images/paper.jpg')");
    } else if ($(this).attr("id")==="scissors") {
        $("#player-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else {
        $("#player-move").css("background-image", "none");
    }
    runGame();
});



function runGame() {

    //Player move is processed
    var playerMove;

    if ($("#player-move").css("background-image")==="rock") {
        playerMove = "rock";
    } else if ($("#player-move").css("background-image")==="paper") {
        playerMove = "paper";
    } else if ($("#player-move").css("background-image")==="scissors") {
        playerMove = "scissors";
    } else {
        playerMove = "none");
    }

    //Computer move is generated
    symbols = ["rock", "paper", "scissors"]
    var computerMove = symbols[Math.floor(Math.random()*symbols.length)];
    console.log(computerMove)

    if ($("#player-move").css("background-image")!=="none" && computerMove === "scissors") {
        $("#computer-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else if ($("#player-move").css("background-image")!=="none" && computerMove === "rock") {
        $("#computer-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if ($("#player-move").css("background-image")!=="none" && computerMove === "paper") {
        $("#computer-move").css("background-image", "url('assets/images/paper.jpg')");
    } else {
        $("#computer-move").css("background-image", "none");
    }

    checkWhoWins(playerMove, computerMove);

}

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

    if(playerChoice === computerChoice) {
        // Show draw and do not increment any ones score
        return;
    }
    const playerChoiceConfig = SYMBOL_CONFIG.find(eachSymbolConfig => eachSymbolConfig.id === playerChoice);
    if(playerChoiceConfig.winsOver === computerChoice) {
        alert("You won! Keep going to increase your streak! :D");
        playerScore++;
    } else {
        alert("Oh no, you lost! Try again!");
         computerScore++;
    }
}

