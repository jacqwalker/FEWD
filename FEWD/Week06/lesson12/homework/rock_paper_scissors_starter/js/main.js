var humanScore = 0;
var computerScore = 0;

function compChoice() {
  var computerChoice = Math.random();
  console.log(computerChoice);
  if (computerChoice <= 0.3) {
    return computerChoice = "Rock";
    // console.log(computerChoice);
  } else if (computerChoice > 0.3 && computerChoice <= 0.69) {
    return computerChoice = "Scissors";
    // console.log(computerChoice);
  } else {
    return computerChoice = "Paper";
    // console.log(computerChoice);
  }
}

function userChoiceRock(e) {
  e.preventDefault();
  var userChoice = "Rock";
  var computerChoice = compChoice();
  // console.log(computerChoice);

  if (userChoice === computerChoice) {
    // console.log("this is a draw")
    aDraw();
  } else if (computerChoice === "Scissors") {
    // console.log("User wins");
    userWins();
    $("#status").html("Computer chose Scissors. User wins");
  } else {
    // console.log("Computer wins");
    computerWins();
    $("#status").html("Computer chose Paper. Computer wins");
  }
}

function userChoicePaper(e) {
  e.preventDefault();
  var userChoice = "Paper";
  var computerChoice = compChoice();

  if (userChoice === computerChoice) {
    aDraw();
  } else if (computerChoice === "Scissors") {
    computerWins();
    $("#status").html("Computer chose Scissors. Computer wins");
  } else {
    userWins();
    $("#status").html("Computer chose Rock. User wins");
  }
}

function userChoiceScissors(e) {
  e.preventDefault();
  var userChoice = "Scissors";
  var computerChoice = compChoice();

  if (userChoice === computerChoice) {
    aDraw();
  } else if (computerChoice === "Rock") {
    computerWins();
    $("#status").html("Computer chose Rock. Computer wins");
  } else {
    userWins();
    $("#status").html("Computer chose Paper. User wins");
  }
}

function computerWins() {
  computerScore = computerScore + 1;
  $("#computerScore").html(computerScore);
}

function userWins() {
  humanScore = humanScore + 1;
  $("#humanScore").html(humanScore);
}

function aDraw() {
  $("#status").html("User choice equals computer choice. It is a draw. Play again");
}

$("#rock").click(userChoiceRock)
$("#paper").click(userChoicePaper);
$("#scissors").click(userChoiceScissors);
