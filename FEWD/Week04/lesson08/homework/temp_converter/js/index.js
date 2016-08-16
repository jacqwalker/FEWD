//Do stuff

//Get the value of the input - not at the point of loading the page, only when we get the input therefore it goes in a function
// get the button

// function convert () {
//   console.log("hello world");
// TO CHECK THE BUTTON IS WORKING}

// STEP 1 = get the data
// function convert () {
//   var c = document.querySelector("#c").value;
// with inputs, we want to get the value (not innerHTML)}

// STEP 2 = define var and then test the var are working through console log
// function convert () {
//   var c = document.querySelector("#c").value;
//   var f = c * 9/5 +32;
//   console.log(f);
// }

// include parse function in case the user types in "4"
// function convert () {
//   var c = document.querySelector("#c").value;
//   var f = parseFloat(c) * 9/5 + 32;
//   console.log(f);
// }

//STEP 3 - go and get the data we want to modify which is in the h3 and we are giving it a whole new value (with the '=' we are reassigning the information)
// function convert () {
//   var c = document.querySelector("#c").value;
//   var f = parseFloat(c) * 9/5 + 32;
//
//   document.querySelector("h3").innerHTML = "Result:  " + f + "&degF";
// }

function convert () {
  var c = document.querySelector("#c").value;
  var f = parseFloat(c) * 9/5 + 32;

  document.querySelector("h3").innerHTML = "Result: " + f + "°F";
}

// Put this at the end of the function because we want to do on click of the button, not as we load the page

document.querySelector("#submit").onclick = convert;


//MY ATTEMPT AT HOMEWORK
 // function conversion () {
//   var c = document.querySelector(".input").value;
//   var f = c*9/5+32;
//
//   document.querySelector("span").innerHTML = f;
// }
//
// document.querySelector("button").onclick = conversion;
