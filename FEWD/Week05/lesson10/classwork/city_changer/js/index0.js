// SOLUTION TO CITY CHANGER
// console.log("say hello"); Check to see if links up to console

// What event is going to happen to kick this off - in this example it is when we hit the submit button on the form

// Step 1 console log grabbing the form (the piece of data)
// console.log(document.querySelector("form"));
// Java script document.querySelector("form").onsubmit = doSomething
// $("form").submit(doSomething);

// Step 2
// function doSomething () {
//   console.log("say hello");
// }
//
// $("form").submit(doSomething);

// At this stage, we can see "say hello" very quickly in the console log. We are not calling the function anywhere in the code but we can still see "say hello". This is default browser behaviour. When we hit the submit button, the code in the function is being called (the event itself is taking care of calling the function) as the browser has done it by default.

// If we enter the below, we get more than "say hello" in the console log. It shows what all the default script is
// function doSomething (val) {
//   console.log(val);
//   console.log("say hello");
// }
//
// $("form").submit(doSomething);

// One of the default behaviour with forms is that when they take your data, they would post it to a server and then redirect you to a new 'thank you' page. As we do not have a 'thank you' page to go to, the default behaviour is that it will refresh the page. Therefore the form by default refreshes the page. We can prevent default behaviour. Every browser EVENT has default behaviour (click a button etc). preventDefault() is a function

// function doSomething (val) {
//   val.preventDefault();
//   console.log(val);
//   console.log("say hello");
// }
//
// $("form").submit(doSomething);

// STEP 4 pull the data and check it (console log)
// function doSomething (val) {
//   val.preventDefault();
//   console.log($("#city-type"));
// }
//
// $("form").submit(doSomething);

// STEP 5 - need to store the piece of data (use variable) then console log to check var set correct
// function doSomething (val) {
//   val.preventDefault();
//   var city = $("#city-type");
//   console.log(city);
// }
//
// $("form").submit(doSomething);

// STEP 6 - need to decide based on what the user types, what background to apply. We want the value of the input.
// var city = $("#city-type").val(); The val is a function - we are calling the function (). Jquery works on functions. If we have .val() we are getting the value. If we were to set the value, then it would be .val("blue")

// function doSomething (val) {
//   val.preventDefault();
//   var city = $("#city-type").val();
//   console.log(city);
// }
//
// $("form").submit(doSomething);

// STEP 7 choose london or Austin and use if, else if statements
// function doSomething (val) {
//   val.preventDefault();
//   var city = $("#city-type").val();
//
//   if (city === "london") {
//     console.log("they chose london");
//   } else if (city === "austin") {
//     console.log("they chose austin")
//   }
// }

// $("form").submit(doSomething);

function doSomething (val) {
  val.preventDefault();
  var city = $("#city-type").val();
  city = city.trim().toLowerCase();

// we are reassigning city to city.trim() - use the exisitng value of city and trim it (removes white space at the beginning and end of what is typed) and we also want it to go to lowercase
// city = city.trim();
// city = city.toLowerCase();
// We can chain methods together city = city.trim().toLowerCase();

  if (city === "london") {
    console.log("they chose london")
    $("body").attr("class", "london");
    // going to the body, getting the class attribute and then setting it to London
  } else if (city === "austin") {
    $("body").attr("class", "austin");
  } else if (city === "los angeles" || city === "la") {
    $("body").attr("class", "la");
  }

  $("#city-type").val("");
  // after we enter the name in the input field, then we are setting the value to be an empty string so it clears the input after we submit the form
}

$("form").submit(doSomething);
