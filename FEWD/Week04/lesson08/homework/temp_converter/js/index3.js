//Do stuff

function conversionToFahrenheit () {
  var c = document.querySelector(".a").value;
  var f = c*5/9+32;
  var d = (document.querySelector(".b").value-32)*(5/9);

  if (c > 0) {
    document.querySelector(".b").innerHTML = f;
  } else if (c <= 0) {
    document.querySelector(".b").innerHTML = f;
  } else if (c === "") {
    document.querySelector(".a").innerHTML = d;
  }
}

function clear () {
  var = reset;
  document.querySelector(".a").value = "Celcius";
  document.querySelector(".b").value = "Fahrenheit";
}

document.querySelector("convert").onclick = conversionToFahrenheit;
document.querySelector("clear").onclick = clear;
