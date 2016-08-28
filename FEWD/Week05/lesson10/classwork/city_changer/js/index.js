function switchCity (image) {
  document.querySelector("body").className = image;
}

function cityChanger (event) {
  event.preventDefault();

  var city = $("#city-type").val();

  // Use attr(attributeName, val) to do what is className in javascript 

  if (city == "New York City" || city == "New York City".toLowerCase() || city == "nyc") {
    switchCity("nyc");
  } else if (city == "San Francisco" || city == "sf") {
    switchCity("sf");
  } else if (city == "Los Angeles" || city == "Los Angeles".toLowerCase() || city == "la") {
    switchCity("la");
  } else if (city == "Austin" || city == "Austin".toLowerCase()) {
    switchCity("austin");
  } else if (city == "Sydney" || city == "Sydney".toLowerCase() || city == "syd") {
    switchCity("sydney");
  } else if (city == "London" || city == "London".toLowerCase() || city == "lon") {
    switchCity("london");
  }
}

// document.querySelector("#submit-btn").onclick = cityChanger;
$("#submit-btn").click(cityChanger);
