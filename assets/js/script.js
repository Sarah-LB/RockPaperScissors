//Hover effect for selecting image

$(".play-image").mouseenter(function(){
    $(this).css({"width": "210px", "height": "210px"});
});

$(".play-image").mouseleave(function(){
    $(this).css({"width": "200px", "height": "200px"});
});


//Player's chosen symbol appears in play boxes

$(".play-image").click(function(){
    
    $("#player-move").css("background-image", "");
    $("#computer-move").css("background-image", "");

    let playerMove;

    if ($(this).attr("id")==="rock") {
        $("#player-move").css("background-image", "url('assets/images/rock.jpg')");
        playerMove = "rock";
    } else if ($(this).attr("id")==="paper") {
        $("#player-move").css("background-image", "url('assets/images/paper.jpg')");
        playerMove = "paper";
    } else if ($(this).attr("id")==="scissors") {
        $("#player-move").css("background-image", "url('assets/images/scissors.jpg')");
        playerMove = "scissors";
    } else {
        playerMove = "none";
    }

    runGame(playerMove);
});


//Computer symbol generated

function runGame(playerMove){
    symbols = ["rock", "paper", "scissors"]
    var computerMove = symbols[Math.floor(Math.random()*symbols.length)];

    if (playerMove!=="none" && computerMove === "scissors") {
        $("#computer-move").css("background-image", "url('assets/images/scissors.jpg')");
    } else if (playerMove!=="none" && computerMove === "rock") {
        $("#computer-move").css("background-image", "url('assets/images/rock.jpg')");
    } else if (playerMove!=="none" && computerMove === "paper") {
        $("#computer-move").css("background-image", "url('assets/images/paper.jpg')");
    }

    checkWhoWins(playerMove, computerMove);

};




const SYMBOL_CONFIG = [
    {
        id: "rock",
        name: "Rock",
        imgSrc: "assets/images/rock.jpg",
        winsOver: "scissors"
    },
    {
        id: "paper",
        name: "Paper",
        imgSrc: "assets/images/paper.jpg",
        winsOver: "rock"
    },
    {
        id: "scissors",
        name: "Scissors",
        imgSrc: "assets/images/scissors.jpg",
        winsOver: "paper"
    }
];


//Check who wins and increment scores

function checkWhoWins(playerChoice, computerChoice) {

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);

    if(playerChoice === computerChoice) {
        setTimeout(function(){
            Swal.fire("It's a draw!");
            $("#player-move").css("background-image", "");
            $("#computer-move").css("background-image", "");
        },500);
        return;
    }
    const playerChoiceConfig = SYMBOL_CONFIG.find(eachSymbolConfig => eachSymbolConfig.id === playerChoice);
    if(playerChoiceConfig.winsOver === computerChoice) {
        setTimeout(function(){
            Swal.fire("You won! Keep it up!");
            document.getElementById("player-score").innerText=++playerScore;
            $("#player-move").css("background-image", "");
            $("#computer-move").css("background-image", "");
        },500);
        
    } else {
        setTimeout(function(){
            Swal.fire("Oh no, you lost! Keep going, try again!");
            document.getElementById("computer-score").innerText=++computerScore;
            $("#player-move").css("background-image", "");
            $("#computer-move").css("background-image", "");
        },500);
        
    }
}

//start again button
$("#start-again").click(function(){
    document.getElementById("player-score").innerText=0;
    document.getElementById("computer-score").innerText=0;
    $("#player-move").css("background-image", "");
    $("#computer-move").css("background-image", "");
});