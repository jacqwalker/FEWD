// so every time we click the button i want the image to change
//

// if we create an array variable listing all the pictures
// do we then link the button to the pictures

var images = ["./images/animals/animal1.jpg", "./images/animals/animal2.jpg", "./images/animals/animal3.jpg", "./images/animals/animal4.jpg", "./images/animals/animal5.jpg", "./images/animals/animal6.jpeg"];

var imageIndex = 0;

function changeImage() {

  $("img").attr("src", images[imageIndex]);
  imageIndex = (imageIndex + 1) % images.length;
}

function goBack() {
}

$("#forward").click(changeImage);
$("#back").click(goBack);
