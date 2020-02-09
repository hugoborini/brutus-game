import { nextTick } from "q";

function home_button() {
  var button = document.querySelectorAll(".button");
  var replace_name = document.querySelector(".replace_name");
  var verif = false;
  var next = document.querySelector(".button_next");

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
      verif = true;
      if (i === 0) {
        replace_name.innerHTML = "Celine";
      }
      if (i === 1) {
        replace_name.innerHTML = "Chris";
      }
      if (i === 2) {
        replace_name.innerHTML = "Mamou";
      }
      if (i === 3) {
        replace_name.innerHTML = "Nico";
      }
      if ((verif = true)) {
        next.style.opacity = "1";
      }
    });
  }
  next.addEventListener("click", function() {
    game();
  });
}

function home() {
  oxo.screens.loadScreen("home", function() {
    home_button();
  });
}

function game() {
  oxo.screens.loadScreen("game", function() {
    // game.html is loaded, do something
  });
}

home();
