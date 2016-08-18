// function switchGray() {
//   document.querySelector("body").style.backgroundColor = 'gray';
//   document.querySelector("body").style.color = 'white';
// }
//
// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }
//
// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// OPTION 2
// document.getElementById('grayButton').onclick = document.querySelector("body").classList.toogle("dark");
// document.getElementById('whiteButton').onclick = document.querySelector("body").classList.toogle("dark");

// OPTION 3
// var isOn = true;


// OPTION 4 toggle reverses exactly what you have just done
function toggle() {
  document.querySelector("body").classList.toggle("dark");
}

document.querySelector("#grayButton").onclick = toggle;
document.querySelector("#whiteButton").onclick = toggle;
