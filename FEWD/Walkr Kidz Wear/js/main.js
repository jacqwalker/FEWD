function showNavBar () {
  $(".navBar").toggleClass("visible");
};

function changeSlider () {
  console.log("say hello");
  $(".section1").css("background-image", "url(./images/desktop/slider2.jpg");
};

function restoreImage () {
  console.log("say hello");
  $(".section1").css("background-image", "url(./images/desktop/slider.jpg");
}

$(".hamburger").click(showNavBar);
$(".click2").click(changeSlider);
$(".click1").click(restoreImage);
