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
  var result_courge = 0;
  var counter_result = document.querySelector(".counter__result");
  var counter_add = document.querySelector(".counter__add");
  var counter_sub = document.querySelector(".counter__sub");
  var button_send = document.querySelector(".send");
  var nb_croq_display = document.querySelector(".croq");
  var courge_nb_display = document.querySelector(".courgette");
  var courge_counter = document.querySelector(".counter__courge-resulte");
  var nb_croq = getRandomInt(20);
  var nb_courge = getRandomInt(20);
  var health = document.querySelector(".health");
  var health = document.querySelector(".health");
  var pug = document.querySelector(".pug__home");
  var dialogue = document.querySelector(".diag_game");
  var error_msg = document.querySelector(".non");
  var win_msg = document.querySelector(".oui");

  console.log(nb_courge);

  var health_nb = 300;
  courge_nb_display.innerHTML = nb_courge;
  nb_croq_display.innerHTML = nb_croq;

  setInterval(() => {
    health_nb = health_nb - 1;
    health.style.height = health_nb + "px";

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
    result_courge = result_courge + 1;
    courge_counter.innerHTML = result_courge;
  });
  button_send.addEventListener("click", function() {
    counter_result.innerHTML = result;
    courge_counter.innerHTML = result_courge;
    console.log(result);
    console.log(result_courge);

    if (result === nb_croq && result_courge === nb_courge) {
      console.log("miam");
      pug.classList.add("brutus_win");
      pug.classList.remove("initiale");
      pug.classList.add("win");
      win_msg.classList.remove("hidden");
      dialogue.classList.add("hidden");
      setTimeout(() => {
        pug.classList.add("initiale");
        pug.classList.remove("win");
        pug.classList.remove("brutus_win");
        dialogue.classList.remove("hidden");
        win_msg.classList.add("hidden");
      }, 900);
      result = 0;
      result_courge = 0;
      counter_result.innerHTML = result;
      courge_counter.innerHTML = result_courge;
      nb_croq = getRandomInt(20);
      nb_courge = getRandomInt(20);
      nb_croq_display.innerHTML = nb_croq;
      courge_nb_display.innerHTML = nb_courge;

      if (health_nb > 300) {
        health_nb = 300;
      }
      health_nb = health_nb + 50;
    } else {
      console.log("pas miam");
      health_nb = health_nb - 10;
      result = 0;
      result_courge = 0;
      counter_result.innerHTML = result;
      courge_counter.innerHTML = result_courge;
      dialogue.classList.add("hidden");
      error_msg.classList.remove("hidden");
      pug.classList.add("brutus_lose");
      pug.classList.remove("initial");
      pug.classList.add("error");
      setTimeout(() => {
        dialogue.classList.remove("hidden");
        error_msg.classList.add("hidden");
        pug.classList.remove("error");
        pug.classList.remove("brutus_lose");
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
