var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

var progressBarWidth = progressBar.clientWidth;
var isDrag = false;
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.textContent = getTime(currentTime);
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.textContent = getTime(currentTime);
    timePreview.classList.remove("show");
    timePreview.textContent = 0;
    timePreview.style.left = 0;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

// player
var audio = document.querySelector(".audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playBtn = document.querySelector(".play-btn button.play");
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);
  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.textContent = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  var value = (audio.currentTime * 100) / audio.duration;
  if (!isDrag) {
    currentTimeEl.textContent = getTime(audio.currentTime);
    handleUpdateValue(value);
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.textContent = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.textContent = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
  clearInterval(audInterval);
});

var lyricIcon = document.querySelector(".lyric-icon");
var canvas = document.querySelector(".karaoke-canvas");
var downIcon = document.querySelector(".down-icon");
lyricIcon.addEventListener("click", function () {
  canvas.classList.toggle("show");
});

downIcon.addEventListener("click", function () {
  canvas.classList.remove("show");
});

var lyrics = lyrics.data.sentences;
var totalSentences = lyrics.length;
var karaoke = document.querySelector("#karaoke");

var firstLine = document.querySelector(".lyric .first-line .text");
var secondLine = document.querySelector(".lyric .second-line .text");

var waitingTime = function () {
  firstLine.textContent = "Chiếc khăn gió ấm";
  firstHl.style.opacity = 0;
  firstLine.style.opacity = 1;
  secondLine.style.opacity = 1;
  secondHl.style.opacity = 0;
  secondLine.textContent = "Khánh Phương";
};

var getTextLine = function (obj) {
  var text = obj.words.map((item) => item.data);
  return text.join(" ");
};

// chọn 1st-line hoặc 2nd-line cho lyrics theo cắm cờ true-false
lyrics[0].id = true;
for (var i = 0; i < lyrics.length - 1; i++) {
  if (
    lyrics[i + 1].words[0].startTime -
      lyrics[i].words[lyrics[i].words.length - 1].endTime <
    5000
  ) {
    lyrics[i + 1].id = !lyrics[i].id;
    lyrics[i + 1].waiting = 0;
  } else {
    lyrics[i + 1].id = true;
    lyrics[i + 1].waiting = 1;
  }
}
// Tạo line karaoke
var lineIndex = 0,
  word = 0,
  startHl = 0,
  ratio;
var spaceWidth = 2;
var audInterval;
var firstHl = document.querySelector(".first-line .highlight");
var secondHl = document.querySelector(".second-line .highlight");
firstHl.style.width = "0%";
secondHl.style.width = "0%";

var nextLine = function (index) {
  if (lyrics[index].id === true) {
    secondLine.textContent = getTextLine(lyrics[index + 1]);
    secondLine.style.opacity = 1;
    secondHl.textContent = getTextLine(lyrics[index + 1]);
    secondHl.style.width = "0%";
    secondHl.style.opacity = 1;
  } else {
    firstLine.textContent = getTextLine(lyrics[index + 1]);
    firstLine.style.opacity = 1;
    firstHl.style.opacity = 1;
    firstHl.textContent = getTextLine(lyrics[index + 1]);
    firstHl.style.width = "0%";
  }
};
var hideLine = function (index) {
  if (lyrics[index].id === true) {
    secondLine.style.opacity = 0;
    secondHl.style.opacity = 0;
  } else {
    firstLine.style.opacity = 0;
    firstHl.style.opacity = 0;
  }
};
var showLine = function () {
  firstLine.style.opacity = 1;
  secondLine.style.opacity = 1;
  firstHl.style.opacity = 1;
  secondHl.style.opacity = 1;
};

waitingTime(); // cài đặt mà hình cho nhạc chờ
audio.addEventListener("play", function () {
  audInterval = setInterval(function () {
    if (lineIndex === totalSentences) {
      waitingTime();
      return;
    }
    var startTime = lyrics[lineIndex].words[0].startTime / 1000;
    var endTime =
      lyrics[lineIndex].words[lyrics[lineIndex].words.length - 1].endTime /
      1000;
    var duration = endTime - startTime;
    if (lineIndex === 0 || lyrics[lineIndex].waiting === 1) {
      if (audio.currentTime > startTime - 2) {
        firstLine.textContent = getTextLine(lyrics[lineIndex]);
        firstLine.style.opacity = 1;
        firstHl.textContent = getTextLine(lyrics[lineIndex]);
        firstHl.style.opacity = 1;

        secondLine.textContent = getTextLine(lyrics[lineIndex + 1]);
        secondLine.style.opacity = 1;
        secondHl.textContent = getTextLine(lyrics[lineIndex + 1]);
        secondHl.style.opacity = 1;
      }
    } else {
      // chia thành 3 giai đoạn
      // Giai đoạn 30% thì ẩn dòng trc
      if (audio.currentTime >= startTime + 0.3 * duration) {
        if (
          lineIndex === totalSentences - 1 ||
          lyrics[lineIndex + 1].waiting === 1
        ) {
          showLine();
        } else {
          hideLine(lineIndex);
        }
      }
      // giai doạn 50% thì hiện dòng mới
      if (audio.currentTime >= startTime + 0.5 * duration) {
        if (lineIndex + 2 < totalSentences) {
          if (lyrics[lineIndex + 1].waiting !== 1) nextLine(lineIndex);
        }
      }
    }

    // highlight
    if (word <= lyrics[lineIndex].words.length - 1) {
      var startItem = lyrics[lineIndex].words[word].startTime / 1000;
      var endItem = lyrics[lineIndex].words[word].endTime / 1000;
      if (audio.currentTime >= startItem) {
        if (endItem - audio.currentTime > 0) {
          ratio = ((audio.currentTime - startItem + 0.1) / duration) * 100;
          if (lyrics[lineIndex].id === true) {
            firstHl.style.width = `${startHl + ratio}%`;
          } else {
            secondHl.style.width = `${startHl + ratio}%`;
          }
        } else {
          word++;
          startHl += ratio;
        }
      }
    }
    // end
    if (audio.currentTime > endTime) {
      lineIndex++;
      word = 0;
      startHl = 0;
    }
    // waiting
    if (lyrics[lineIndex].waiting === 1) {
      waitingTime();
      firstHl.style.opacity = 0;
      secondHl.style.opacity = 0;
    }
  }, 1000 / 60);
});

var findLyricIndex = function () {
  if (audio.currentTime === 0) {
    return 0;
  }
  for (var i = 0; i < lyrics.length; i++) {
    if (
      audio.currentTime >= lyrics[i].words[0].startTime &&
      audio.currentTime <= lyrics[i].words[lyrics[i].words.length - 1].endTime
      ) {
        return i;
      } else if (lyrics[i].words[0].startTime >= audio.currentTime) {
      return i;
    }
  }
  return lyrics.length;
};

// var findwidth()
document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
    var currentLineIndex = findLyricIndex();
    if (!lyrics[currentLineIndex]) return;
    console.log(currentLineIndex);
    if (lyrics[currentLineIndex].id === true) {
      firstLine.textContent = getTextLine(lyrics[currentLineIndex]);
      firstLine.style.opacity = 1;
      firstHl.textContent = getTextLine(lyrics[currentLineIndex]);
      firstHl.style.opacity = 1;
      // ratio = 
      // firstHl.style.width = `${startHl + ratio}%`;

      secondLine.textContent = getTextLine(lyrics[currentLineIndex + 1]);
      secondLine.style.opacity = 1;
      secondHl.textContent = getTextLine(lyrics[currentLineIndex + 1]);
      secondHl.style.opacity = 1;
    } else {
      firstLine.textContent = getTextLine(lyrics[currentLineIndex + 1]);
      firstLine.style.opacity = 1;
      firstHl.textContent = getTextLine(lyrics[currentLineIndex + 1]);
      firstHl.style.opacity = 1;

      secondLine.textContent = getTextLine(lyrics[currentLineIndex]);
      secondLine.style.opacity = 1;
      secondHl.textContent = getTextLine(lyrics[currentLineIndex]);
      secondHl.style.opacity = 1;
      // secondHl.style.width = `${startHl + ratio}%`;
    }
  }
});
