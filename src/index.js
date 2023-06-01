/* global rive */
var buttons = document.getElementsByClassName("changeColorButton");
var headings = document.getElementsByClassName("heading");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    headings[i].classList.toggle("pink");
  });
}

