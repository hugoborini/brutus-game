import { nextTick, send } from "q";
import { endianness } from "os";
var score = 0;
var minigame_button = document.querySelector(".minigame");
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function check_score() {
  if (score >= 3) {
    minigame_button.classList.remove("hidden");
  }
}

function score_display() {
  var score_nb = document.querySelector(".score_nb");
  var body = document.querySelector(".body-game");
  console.log(body);

  setInterval(() => {
    score++;
    score_nb.innerHTML = score;
  }, 500);
}

function counter() {
  var result = 0;
  var counter_result = document.querySelector(".counter__result");
  var counter_add = document.querySelector(".counter__add");
  var counter_sub = document.querySelector(".counter__sub");
  var button_send = document.querySelector(".send");
  var nb_croq_display = document.querySelector(".croq");
  var nb_croq = getRandomInt(20);
  var health = document.querySelector(".health");
  var health = document.querySelector(".health");
  var pug = document.querySelector(".pug__home");
  var dialogue = document.querySelector(".diag_game");
  var error_msg = document.querySelector(".non");
  var win_msg = document.querySelector(".oui");
  console.log(dialogue);

  var health_nb = 300;

  nb_croq_display.innerHTML = nb_croq;

  setInterval(() => {
    health_nb = health_nb - 1;
    health.style.width = health_nb + "px";

    if (health_nb <= 0) {
      end();
    }
    console.log("lose");
  }, 100);

  counter_add.addEventListener("click", function() {
    result = result + 1;
    counter_result.innerHTML = result;
  });
  counter_sub.addEventListener("click", function() {
    result = result - 1;
    counter_result.innerHTML = result;
  });
  button_send.addEventListener("click", function() {
    console.log(result);

    if (result === nb_croq) {
      console.log("miam");
      pug.classList.remove("initiale");
      pug.classList.add("win");
      win_msg.classList.remove("hidden");
      dialogue.classList.add("hidden");
      setTimeout(() => {
        pug.classList.add("initiale");
        pug.classList.remove("win");
        dialogue.classList.remove("hidden");
        win_msg.classList.add("hidden");
      }, 900);
      result = 0;
      counter_result.innerHTML = result;
      nb_croq = getRandomInt(20);
      nb_croq_display.innerHTML = nb_croq;
      if (health_nb > 300) {
        health_nb = 300;
      }
      health_nb = health_nb + 50;
    } else {
      console.log("pas miam");
      health_nb = health_nb - 10;
      dialogue.classList.add("hidden");
      error_msg.classList.remove("hidden");
      pug.classList.remove("initial");
      pug.classList.add("error");
      setTimeout(() => {
        dialogue.classList.remove("hidden");
        error_msg.classList.add("hidden");
        pug.classList.remove("error");
        pug.classList.add("initial");
      }, 1000);
    }
  });
}

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

function end() {
  oxo.screens.loadScreen("end", function() {});
}

function game() {
  oxo.screens.loadScreen("game", function() {
    counter();
    score_display();
  });
}

home();
