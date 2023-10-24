import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
const questions = document.querySelector(".questions");
const witch = document.querySelector(".witch");
const saitaman = document.querySelector(".saitaman");

var aText =
  "Bối cảnh: Ở xứ sở Ép-Tám-Tám nọ, công túa Mỹ Nhân bị mụ phù thủy độc ác chuẩn bị táo hãm hại. Hãy cùng SaitamAnnn đánh tráo táo ngon để phù thủy đưa công túa__";

var iArrLength = aText.length; // the length of the text array
var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable

function typewriter() {
  questions.innerHTML = sContents + aText.substring(0, iTextPos) + "_";
  if (iTextPos++ !== iArrLength) {
    setTimeout(typewriter, 100);
  } else {
    const btnStart = document.createElement("button");
    btnStart.className = "btn-start";
    btnStart.innerHTML = "Vừng ơi mở ra!";
    questions.append(btnStart);

    btnStart.addEventListener("click", function (e) {
      e.preventDefault();

      //chay App
      app.start();
    });
  }
}
typewriter();

let timeQuestion = 5000;
let currentTime = 0;
let count = 1;
let countAll = 0;
let streak = 0;
let correct = 0,
  incorrect = 0;
let score = 0;
let index = 0,
  temp = 0;
const app = {
  rootEl: document.querySelector(".questions"),

  render: function (questions) {
    countAll = questions.length;
    if (index < questions.length) {
      this.showQuestion(questions[index]);
      this.timeBar();
    } else {
      setTimeout(this.showResults(), 5000);
    }
    this.timerOut(questions);
  },

  timerOut: function (questions) {
    setTimeout(() => {
      index++;
      if (index < questions.length) {
        const timeBox = document.querySelector(".time-bar");
        timeBox.style.width = "100%";
        currentTime = 0;
        this.showQuestion(questions[index]);
        this.timeBar();
        this.timerOut(questions);
      } else {
        setTimeout(this.showResults(), 5000);
      }
    }, timeQuestion);
  },

  timeBar: function () {
    const timeBox = document.querySelector(".time-bar");
    let width;
    // time = setInterval(() => {
    //   if (currentTime < timeQuestion) {
    //     currentTime += 1000;
    //     width = (1 - currentTime / timeQuestion) * 100;
    //     timeBox.style.width = `${width}%`;
    //   } else {
    //     clearInterval(time);
    //   }
    // }, 1000);
    if (currentTime < timeQuestion) {
      currentTime += 500;
      width = (1 - currentTime / timeQuestion) * 100;
      timeBox.style.width = `${width}%`;
      setTimeout(this.timeBar, 500);
    } else {
      
    }
  },

  handleQuestion: function (question) {
    const answers = document.querySelector(".answers");
    const listAnswers = Array.from(document.querySelectorAll(".answser"));
    const result = document.querySelector(".result");
    answers.addEventListener("click", function (e) {
      if (e.target.dataset.index === question.correct) {
        e.target.style.backgroundColor = "green";
        correct++;
        temp++;
        result.innerHTML = "Ngon luôn!";
        result.classList.add("correct");
        saitaman.innerHTML = `
        <img src="./imgs/saitaman-ngon1.png" alt="saitaman">
        `;
        const other = listAnswers.filter(
          (item) => item.dataset.index !== question.correct
        );
        other.map((item) => {
          item.style.visibility = "hidden";
        });
        listAnswers.map((item) => item.removeEventListener("click"));
      } else {
        if (temp >= streak) {
          streak = temp;
          temp = 0;
        }
        e.target.style.backgroundColor = "red";
        const correctAnswer = listAnswers.find(
          (item) => item.dataset.index === question.correct
        );
        correctAnswer.style.backgroundColor = "green";
        const other = listAnswers.filter(
          (item) =>
            item.dataset.index !== question.correct &&
            item.dataset.index != e.target.dataset.index
        );
        other.map((item) => {
          item.style.visibility = "hidden";
        });

        result.innerHTML = "Chúc may mắn lần sau!";
        result.classList.add("incorrect");
        saitaman.innerHTML = `
        <img src="./imgs/saitaman-ok.png" alt="saitaman">
        `;
        listAnswers.map((item) => item.removeEventListener("click"));
      }
    });
  },

  showQuestion: function (question) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    let { title, a, b, c, d } = question;
    this.rootEl.style.margin = "0";
    this.rootEl.innerHTML = `<div class="time-bar"></div>
    <div class="score-box">
        <div>Question: <span class="count">0</span>/<span class="count-all"></span></div>
        <div>Streak: <span class="streak">0</span></div>
        <div class="score">0</div>
    </div>
    <div class="question">
        <div class="title">${stripHtml(title)}</div>
        <div class="answers">
            <div class="answser" data-index="a">
                <img src="./imgs/apple.svg" alt="apple">
                ${stripHtml(a)}</div>
            <div class="answser" data-index="b">
                <img src="./imgs/apple.svg" alt="apple">
                ${stripHtml(b)}</div>
            <div class="answser" data-index="c">
                <img src="./imgs/apple.svg" alt="apple">
                ${stripHtml(c)}</div>
                <div class="answser" data-index="d">
                <img src="./imgs/apple.svg" alt="apple">
                ${stripHtml(d)}</div>
        </div>
    </div>
    <div class="result"></div>`;
    saitaman.innerHTML = `
    <img src="./imgs//saitman-nice.png" alt="">
        `;
    this.handleQuestion(question);
    const streakBox = document.querySelector(".streak");
    const countBox = document.querySelector(".count");
    const countAllBox = document.querySelector(".count-all");
    const scoreBox = document.querySelector(".score");
    streakBox.innerHTML = streak;
    countAllBox.innerHTML = countAll;
    countBox.innerHTML = count++;
    scoreBox.innerHTML = correct * 100;
  },

  showResults: function (question) {
    this.rootEl.innerHTML = `<div class="total-box">
      <div class="princess">
          <img src="./imgs/bachtuyet2.png" alt="bach-tuyet">
      </div>
      <div class="total">
          <div>Score: <span class="score">0</span></div>
          <div>Streak: <span class="streak">0</span></div>
          <div>Correct: <span class="count-correct">0</span></div>
          <div>Incorrect: <span class="count-incorrect">0</span></div>
          <button class="btn-again">Play Again</button>
      </div>
    </div>`;
    saitaman.innerHTML = ``;
    witch.innerHTML = ``;
    const streakBox = document.querySelector(".streak");
    const countCorrect = document.querySelector(".count-correct");
    const countIncorrect = document.querySelector(".count-incorrect");
    const scoreBox = document.querySelector(".score");
    const btnAgain = document.querySelector(".btn-again");

    scoreBox.innerHTML = correct * 100;
    streakBox.innerHTML = streak;
    countCorrect.innerHTML = correct;
    countIncorrect.innerHTML = countAll - correct;

    btnAgain.addEventListener("click", function () {
      app.start();
      streak = 0;
      count = 0;
      correct = 0;
      incorrect = 0;
    });
  },

  //call API
  getPosts: async function () {
    const { data: questions, response } = await client.get(`/questions`);
    if (response.ok) {
      this.render(questions);
    }
  },

  // Khởi dong app
  start: function () {
    this.getPosts();
  },
};

// chay App
// app.start();
