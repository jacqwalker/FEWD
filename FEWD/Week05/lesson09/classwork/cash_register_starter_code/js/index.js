// on enter you want the reigster to total up and form a new line
function total (event) {
  console.log("say hello");
    event.preventDefault();
}

$("#newEntry").keypress(total);
