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
  }

  document.querySelector("h3").innerHTML = "Result: " + conversion + "°" + scale;
}

document.querySelector("#submit").onclick = convert;


function reset () {
  var reset = 0;

  document.querySelector("#c").value = reset;
  document.querySelector("#f").value = reset;
  document.querySelector("h3").innerHTML = "Result:"
}

document.querySelector("#clear").onclick = reset;
