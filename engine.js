// Coloring bike
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const blackBtn = document.getElementById("black");
const bike = document.getElementById("bike");

redBtn.onclick = function () {
  bike.style.backgroundImage = "url(images/BMW1.png)";
};

blueBtn.onclick = function () {
  bike.style.backgroundImage = "url(images/BMW2.png)";
};

blackBtn.onclick = function () {
  bike.style.backgroundImage = "url(images/BMW3.png)";
};

// Start stop engine

var audio;

function startAudio() {
  if (!audio) {
    audio = new Audio("images/start.mp3");
    audio.addEventListener("ended", function () {
      document.getElementById("startButton").disabled = false;
      document.getElementById("stopButton").disabled = true;
    });
  }

  audio.play();

  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}

function withoutCSS() {
  var stylesheet = document.getElementById("customStylesheet");
  if (stylesheet) {
    stylesheet.parentNode.removeChild(stylesheet);
  }
}

function withoutHTML() {
  document.body.innerHTML = "";
}

function withoutJS() {
  document.getElementById("stopButton").onclick = null;

  document.getElementById("startButton").onclick = null;
}

document.getElementById("relaunch").onclick = function () {
  window.location.reload();
};
