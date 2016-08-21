function convert () {
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;
  var conversion, scale;

  if (c !== "") {
    conversion = c * 9/5 + 32;
    scale = "F";
  } else {
    conversion = (f - 32) * 5/9;
    scale = "C";
    conversion = c;
    // reassigning c variable to conversion so function switchBackground can run when we input into F
    // if (c === "") or if (scale = "C") {
    //   c = conversion;
    // } this is the long way of doing it
  }

function switchBackground(color) {
  document.querySelector("body").style.backgroundColor = color;
}

if (c <= 0) {
  switchBackground("blue");
} else if (c > 0 && c <= 18) {
  switchBackground("grey");
}
else if (c > 18 && c <= 30) {
switchBackground("orange");
}
else {
  switchBackground("red");
}

document.querySelector("h3").innerHTML = "Result: " + conversion + "°" + scale;
}

document.querySelector("#submit").onclick = convert;


// change the background colour based on value of c but as we are using same text over and over again, we can use another function within a function
// if (c <= 0) {
//   document.querySelector("body").style.backgroundColor = "blue";
// }
// else if (c > 0 && c <= 18) {
//   document.querySelector("body").style.backgroundColor = "grey";
// }
// else if (c > 18 && c <= 30) {
// document.querySelector("body").style.backgroundColor = "orange";
// }
// else {
//   document.querySelector("body").style.backgroundColor = "red";
// }
