  // do something
  // define var
  // run function
function cityChanger (city) {
  city.preventDefault();
  console.log("say hello");

  var city = document.querySelector("#city-type").value;
  // $("#city-type").val();

  // if (city === "London" ) {
  //   $("body").css("backgound-image", "url(./images/london.jpg)");
  //  }
}

$("#submit-btn").click(cityChanger);
