//Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var value;
var initialClientX;
var currentValue = 0;

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".player .play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var progressBarWidth = progressBar.clientWidth;
var timing = document.querySelector("span.time-timing");

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    value = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${value}%`;
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    currentValue = value;
    handleInput(value);
  }
});

var handleDrag = function (e) {
  var moveWidth = e.clientX - initialClientX;
  value = (moveWidth * 100) / progressBarWidth + currentValue;
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
  handleInput(value);
};

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function (e) {
  document.removeEventListener("mousemove", handleDrag);
  currentValue = value;
  handleChange(value);
});

// Nhận giá trị phím kéo, khi bấm chuột xuống
//1. Nhả chuột
var handleChange = function (value) {
//   audio.currentTime = (value * audio.duration) / 100;
};
// 2. Bấm chuột xuống và kéo
var handleInput = function (value) {
  audio.currentTime = (value * audio.duration) / 100;
};

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// lăng nghe sự kiện loaded data khi file tải xong
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);
  value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
});

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
});

// hiện timing xem trước

var handleHover = function (e) {
  timeHover = getTime((e.offsetX / progressBarWidth) * audio.duration);
  timing.innerHTML = timeHover;
  timing.style.left = `${e.offsetX}px`;
};

progressBar.addEventListener("mouseover", function (e) {
  e.stopPropagation();
  timing.style.opacity = 1;
  timing.style.visibility = "visible";
  progressBar.addEventListener("mousemove", handleHover);
});

progressBar.addEventListener("mouseout", function (e) {
  timing.style.opacity = "";
  timing.style.visibility = "hidden";
  handleHover(e);
});
// chặn nổi bọt
progressSpan.addEventListener("mouseover", function (e) {
  e.stopPropagation();
});
