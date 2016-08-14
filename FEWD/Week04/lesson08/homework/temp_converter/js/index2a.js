//Do stuff

function conversionToFahrenheit () {
  var c = document.querySelector(".a").value;
  var f = c*5/9+32;
  var d = (c-32)*(5/9);

  if (document.querySelector(".b").value === "Fahrenheit") {
    document.querySelector("span").innerHTML = f;
  } else {
    document.querySelector("span").innerHTML = d;
  }
}

document.querySelector("button").onclick = conversionToFahrenheit;
