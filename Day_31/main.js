const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");

let startTime = null;

const timer = function (timeStamp) {
  if (!startTime) {
    startTime = timeStamp;
  };

  const elapsed = timeStamp - startTime;
  if (elapsed >= 1000) {
    counter.textContent--;
    startTime = timeStamp;
  };

  (+counter.textContent > 0) ? requestAnimationFrame(timer) :  btn.classList.add("show");
};

window.addEventListener("load", (event) => {
    requestAnimationFrame(timer);
});

btn.addEventListener("click", function() {
    if (+counter.textContent === 0) {
        window.open("https://fullstack.edu.vn", "_blank");
    };
});

