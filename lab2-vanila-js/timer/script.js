const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const inputs = document.querySelectorAll(".control-input");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let timer;
let isActive = localStorage.getItem("active")
  ? localStorage.getItem("active") === "true"
  : false;
let player;
let audio;

const manageControls = (flag) => {
  if (flag) {
    minutesInput.setAttribute("disabled", true);
    secondsInput.setAttribute("disabled", true);
  } else {
    minutesInput.removeAttribute("disabled");
    secondsInput.removeAttribute("disabled");
  }
};

const print = (value, target) => {
  if (value < 10) {
    target.value = "0" + value;
  } else {
    target.value = value;
  }
};

const finish = () => {
  document.body.style.backgroundColor = "var(--compliteBg)";
  audio = new Audio("./audio/finish.mp3");
  player = setInterval(() => {
    audio.play();
  }, 1000);
};

if (localStorage.getItem("seconds")) {
  print(+localStorage.getItem("seconds"), secondsInput);
}
if (localStorage.getItem("minutes")) {
  print(+localStorage.getItem("minutes"), minutesInput);
}

const stop = () => {
  clearInterval(timer);
};

const tick = () => {
  manageControls(true);
  isActive = true;
  localStorage.setItem("active", true);
  let seconds = +secondsInput.value;
  let minutes = +minutesInput.value;
  timer = setInterval(() => {
    if (!seconds && !minutes) {
      isActive = false;
      localStorage.setItem("active", false);
      stop();
      finish();
      print(seconds, secondsInput);
    } else {
      if (!seconds) {
        seconds = 60;
        minutes--;
        print(minutes, minutesInput);
      }
      seconds--;
      print(seconds, secondsInput);
    }
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("minutes", minutes);
  }, 1000);
};

const reset = () => {
  stop();
  clearInterval(player);
  if (audio) {
    audio.pause();
  }
  document.body.style.backgroundColor = "var(--defaultBg)";
  print(0, secondsInput);
  print(0, minutesInput);
  manageControls(false);
  localStorage.setItem("seconds", 0);
  localStorage.setItem("minutes", 0);
  localStorage.setItem("active", false);
};

if (isActive) {
  console.log("active");
  tick();
}

const keyupEvent = (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
};

const changeEvent = (e) => {
  if (e.target.value.length === 1) {
    e.target.value = "0" + e.target.value;
  } else if (e.target.value.length === 0) e.target.value = "00";
};

inputs.forEach((elem) => {
  elem.addEventListener("keyup", keyupEvent);
  elem.addEventListener("change", changeEvent);
});

startBtn.addEventListener("click", tick);
stopBtn.addEventListener("click", () => {
  isActive = false;
  localStorage.setItem("active", false);
  stop();
});
resetBtn.addEventListener("click", reset);
