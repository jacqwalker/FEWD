var c = 20;
var f = c*9/5+32;

//Do stuff

function conversion () {
  document.querySelector("span").innerHTML = f;
}

document.querySelector("button").onclick = conversion;
