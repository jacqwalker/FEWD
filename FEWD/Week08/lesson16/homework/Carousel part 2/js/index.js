$(".back").addClass("hide");

var info = {
  "image1" : {
    "img": "./images/animal1",
    "h2": "Horse",
    "p": "The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae."
  },
  "image2" : {
    "img": "./images/animal2",
    "h2": "Pig",
    "p": "A pig is any of the animals in the genus Sus, within the Suidae family of even-toed ungulates. Pigs are highly social and intelligent animals."
  },
  "image3" : {
    "img": "./images/animal3",
    "h2": "Rhino",
    "p": "A rhinoceros (meaning 'nose horn'), often abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of these extant species are native to Africa and three to Southern Asia."
  },
  "image4" : {
      "img": "./images/animal4",
      "h2": "Giraffe",
      "p": "The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring."
    },
  "image5" : {
        "img": "./images/animal5",
        "h2": "Gorillas",
        "p": "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. They are the largest living primates."
    },
  "image6" : {
        "img": "./images/animal6",
        "h2": "Snake",
        "p": "ASnakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears."
    }
  };

var image = [info.image1.img, info.image2.img, info.image3.img, info.image4.img, info.image5.img, info.image6.img];

var heading = [info.image1.h2, info.image2.h2, info.image3.h2, info.image4.h2, info.image5.h2, info.image6.h2];

var para = [info.image1.p, info.image2.p, info.image3.p, info.image4.p, info.image5.p, info.image6.p];

var i = 0;

function showHideButton () {
  var lastImageIndex = image.length - 1;

  if (i >= lastImageIndex) {
      $(".forward").addClass("hide");
    } else if (i <= 0) {
      $(".back").addClass("hide");
    } else {
      $(".back").removeClass("hide");
      $(".forward").removeClass("hide");
    }
}

function changeImage () {
  $(".wrapper").html('<img src="' + image[i] + '.jpg"/>' + "<h2>" + heading[i] + "</h2>" + "<p>" + para[i] + "</p>");
  showHideButton();
}

function goBack () {
  i--;
  // i = i - 1;
  changeImage();
}

function goForward () {
  i++;
  // i = i + 1;
  changeImage();
}

$(".back").click(goBack);
$(".forward").click(goForward);
