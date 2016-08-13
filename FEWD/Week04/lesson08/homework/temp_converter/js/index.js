//Do stuff

function conversion () {
  var c = document.querySelector(".input").value;
  var f = c*9/5+32;
  
  document.querySelector("span").innerHTML = f;
}

document.querySelector("button").onclick = conversion;
