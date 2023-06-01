/* global rive */

var buttons = document.getElementsByClassName("changeColorButton");
var headings = document.getElementsByClassName("heading");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var currentColor = headings[i].style.color;

    if (currentColor === "pink") {
      headings[i].style.color = "blue";
      headings[i].style.fontSize = "15px"; // original font size
    } else {
      headings[i].style.color = "pink";
      headings[i].style.fontSize = "25px"; // slightly larger font size
    }
  });
}
