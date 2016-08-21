function convert () {
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;
  var conversion;

  if (c !== "") {
    conversion = c * 9/5 + 32;
    document.querySelector("#f").value = conversion;
  } else {
    conversion = (f - 32) * 5/9;
    document.querySelector("#c").value = conversion;
  }
  }


function reset () {
  document.querySelector("#c").value = "";
  document.querySelector("#f").value = "";
}

document.querySelector("#submit").onclick = convert;
document.querySelector("#clear").onclick = reset;
