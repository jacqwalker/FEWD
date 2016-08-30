// What event are we waiting for?
// Clicking one of the three buttons

// need two global variables as it does not clear out each time we run the function

var humanScore = 0;
console.log(humanScore);
var computerScore = 0;

function play (humanPlay) {
  // do not need computerPlay as it is random computerChoice
  var computerPlay = "scissors";
  var humanWins = (humanPlay === "rock" && computerPlay === "scissors") || (humanPlay === "paper" && computerPlay === "rock") || (humanPlay === "scissors" && computerPlay === "paper");
  // if (humanPlay === computerPlay) {
  //   console.log("you tied");
  // } else if (humanPlay === "rock") {
  //   if (computerPlay === "paper") {
  //     console.log("you played rock, computer played paper");
  //   } else {
  //     console.log("you played rock, computer played scissors");
  //   }
  // } else if (humanPlay === "paper") {
  //   console.log("you win");
  // } else {
  // } Can still simplify more
  if (humanPlay === computerPlay) {
    console.log("you tied");
  } else if (humanWins) {
    humanScore = humanScore + 1;
    $("#humanScore").html(humanScore);
    console.log(humanScore);
    $("#status").html("Computer chose " + computerPlay + " and you chose " + humanPlay + ". Therefore you win.");
  } else {
    computerScore = computerScore++;
  }
}
// this is a wrapper function

function playRock () {
  play("rock");
}

function playPaper () {
    play("paper");
}

function playScissors () {
  play("scissors");
}


$("#rock").click(playRock);
$("#paper").click(playPaper);
$("#scissors").click(playScissors);
// We need three different functions here as there are three different buttons doing three different comparisons
