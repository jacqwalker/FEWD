// function doSomething (event) {
//   (event).preventDefault();
//   console.log("doing something");
// }
//
// function doSomething (event) {
//   (event).preventDefault();
//   var entry = $("#newEntry").val();
//   console.log(entry);
// }

// function doSomething (event) {
//   (event).preventDefault();
//   var entry = $("#newEntry").val();
//   // $("#entries").append("<p>HELLOWORLD</p>");
//   // reference the parent and then add children - that is what appends does. Here we are adding a 'p'
//   // $("#entries").append("<tr></tr>");
//   // To tbody (#entries) adding tr
//   // add td to tr
//   // $("#entries").append("<tr><td></td></tr>");
//   // $("#entries").append("<tr><td>600</td></tr>");
//   // Typed in 600 to see what appears
//   // $("#entries").append("<tr><td></td><td>600</td></tr>");
//   // because there are two cells in the tfoot, we need to create two cells in what we are appending otherwise our text won't line up correctly
//   $("#entries").append("<tr><td></td><td>" + entry + "</td></tr>");
//   // if we put entry where the 600 is, it is put in the middle of a string and would return the word entry. To use variables in a strng element, split out the string: "tr/td" + entry + "tr/td"
  //
  // var total = 0;
  // console.log(total + entry);
  // Everything we pull off the DOM is a string
  // so if we console.log(type of (total + entry)) we will see it is returning a string; therefore use parseFloat
  // console.log(total + parseFloat(entry)); type into input and see we get a number back

  // function doSomething (event) {
  //   (event).preventDefault();
  //   var entry = $("#newEntry").val();
  //   entry = parseFloat(entry);
  //   // can combine these two lines)
    // Everything we pull off the DOM is a string
    // so if we console.log(type of (total + entry)) we will see it is returning a string; therefore use parseFloat
    // console.log(total + parseFloat(entry)); type into input and see we get a number back

    // $("#entries").append("<tr><td></td><td>" + entry + "</td></tr>");
    //
    // var total = 0;
    // total = total + entry;
    // console.log(total + entry);
    // if we put total in here, every time we hit enter, it resets the total to 0 (it goes through the function again where we have set var total = 0. So each time the total goes back to 0). So we don't want total as part of the function, it needs to be a global variable

var total = 0;

function currencyFormat (pineapple) {
  return "$" + pineapple.toFixed(2);
  // you need return - otherwise it comes up as undefined
}

function doSomething (event) {
  (event).preventDefault();
  var entry = $("#newEntry").val();
  entry = parseFloat(entry);
  // entry = entry.toFixed(2);
  // entry = parseFloat(entry);
  // fixes the number at a certain amount of decimal places and then returns as a "string" instead of a number so need to do parseFloat again
  // or can visually add toFixed() to entry plus total when we run the functions below

  if (entry*0 === 0) {
    $("#entries").append("<tr><td></td><td>" + currencyFormat(entry) + "</td></tr>");
  // $("#entries").append("<tr><td></td><td>$" + entry.toFixed(2) + "</td></tr>");
  // the $ + toFixed is done here and below so we can create a function

    total = total + entry;
  // console.log(total + entry); When you enter numbers you should see the console totalling up what you enter. Now you can replace console.log with what you really want it to do
  // $("#total").html("$" + total.toFixed(2));
    $("#total").html(currencyFormat(total));
    $("section").removeClass("error").html("");
  } else {
    $("section").addClass("error").html("please enter a valid number");
  }
  $("#newEntry").val("");
}

$("#entry").submit(doSomething);


// MY ATTEMPT AT HOMEWORK
// function register(event) {
//   event.preventDefault();
//   var input = parseInt($("#newEntry").val());
//   var result = $("<tr></tr>").text(input);
//   var total = 0;
//
//   $("tbody").append(result).attr("class", "entries");
//   $("#total").html("$" + total);
//
//   $("#newEntry").val("");
// }
//
// $("#entry").submit(register);
