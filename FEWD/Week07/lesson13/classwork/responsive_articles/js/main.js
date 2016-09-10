// if ($(window).width() >= 650) {
//   $("ul").show();
//   $("button").hide();
// } else {
//   $("ul").hide();
//   $("button").show();
// }
//
// function resize () {
//   var screenWidth = $(window).width();
//
//   if (screenWidth >= 650) {
//   $("ul").show();
//   $("button").hide();
// } else {
//   $("ul").hide();
//   $("button").show();
// }
// }
//
function hamburgerMenu () {
  $("ul").toggleClass("visible");
}

$(".hamburger").click(hamburgerMenu);
// $(window).resize(resize);
