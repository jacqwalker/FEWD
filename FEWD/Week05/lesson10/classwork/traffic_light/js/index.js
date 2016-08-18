//Implement the red light using jQuery. Don't forget to add the script tags.
//
// function illuminateRed() {
//    clearLights();
//    document.getElementById("stopLight").style.backgroundColor = "red";
//  }

 function illuminateRed() {
    clearLights();
    $("#stopLight").css("backgroundColor", "red");
  }

function illuminateYellow() {
  clearLights();
  $("#slowLight").css("backgroundColor", "yellow");
}

function illuminateGreen() {
  clearLights();
  $("#goLight").css("backgroundColor", "green");
}

function clearLights() {
  $("#stopLight").css("backgroundColor", "black");
  $("#slowLight").css("backgroundColor", "black");
  $("#goLight").css("backgroundColor", "black");
}

$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);
$("#clearButton").click(clearLights);
