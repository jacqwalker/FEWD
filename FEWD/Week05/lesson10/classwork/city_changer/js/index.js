function switchCity (city) {
  document.querySelector("body").className = city;
}

function cityChanger (event) {
  event.preventDefault();

  var city = $("#city-type").val();

  if (city == "New York City" || city == "New York City".toLowerCase() || city == "nyc") {
    switchCity("nyc");
  } else if (city == "San Francisco" || city == "sf") {
    switchCity("sf");
  } else if (city == "Los Angeles") {
    switchCity("la");
  } else if (city == "Austin") {
    switchCity("austin");
  } else if (city = "Sydney") {
    switchCity("sydney");
  } else {
    switchCity("london");
  }
}

// document.querySelector("#submit-btn").onclick = cityChanger;
$("#submit-btn").click(cityChanger);
