
function switchBackground (color) {
    document.querySelector("body").style.backgroundColor = color;
}

function conversion () {

    var c = document.querySelector("#c").value;
    var f = document.querySelector("#f").value;
    var computation;

    if (c === "") {
        computation = (f - 32) * 5/9;
        document.querySelector("#c").value = computation;
        c = computation;
    } else {
        computation = c * 9/5 + 32;
        document.querySelector("#f").value = computation;
    }

    if (c <= 0) {
        switchBackground("blue");
    } else if (c > 0 && c < 18) {
        switchBackground("grey");
    } else if (c >= 18 && c < 30) {
        switchBackground("orange");
    } else {
        switchBackground("red");
    }
}

function reset () {
    document.querySelector("#c").value = "";
    document.querySelector("#f").value = "";
    document.querySelector("body").style.backgroundColor = "white";
}

document.querySelector(".clear").onclick = reset;
document.querySelector(".convert").onclick = conversion;
