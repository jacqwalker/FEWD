// // GRAB THE DATA FIRST
// function convert () {
//   var c = document.querySelector("#c").value;
//   var f = document.querySelector("#f").value;

// Then there are two different things we want to do, so use if / else function (do not need else if, as it is one or the other)
// function convert () {
//   var c = document.querySelector("#c").value;
//   var f = document.querySelector("#f").value;
//
//   if () {
//
//   } else {
//
//   }

// WRITE OUT PSUEDO CODE
// function convert () {
//   var c = document.querySelector("#c").value;
//   var f = document.querySelector("#f").value;
//
//   if (the_user_filled_out_celcius) {
//     //convert celcius to fahrenheit
//   } else {
//     // convert to fahrenheit to celcius
//   }

// //   document.querySelector("h3").innerHTML = "Result: " + conversion + "°" + scale; changed the f to 'conversion' as could be f or c and then we add scale. The 'conversion' and 'scale' is where we need data, therefore they are variables and we need to declare var
// var c = document.querySelector("#c").value;
// var f = document.querySelector("#f").value;
// var conversion, scale; (we do not yet know how these are going to be defined)

// if (c does not equal empty string in js this is c !== "". We are checking that there is something in this box) {
//   //convert celcius to fahrenheit
// } else {
//   // convert to fahrenheit to celcius
// }

// So we know the user has filled in celcius, so know we define the conversion which is the variable conversion
// i.e. c = f * 9/5 + 32 and then we can define scale as well as 'F' in this case within the {} so the variables are then specific to those curly brackets

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

//MY ATTEMPT AT HOMEWORK
// function conversionToFahrenheit () {
//   var c = document.querySelector(".a").value;
//   var f = c*5/9+32;
//   var d = (c-32)*(5/9);
//
//   if (document.querySelector(".b").value === "Fahrenheit") {
//     document.querySelector("span").innerHTML = f;
//   } else {
//     document.querySelector("span").innerHTML = d;
//   }
// }
//
// document.querySelector("button").onclick = conversionToFahrenheit;
