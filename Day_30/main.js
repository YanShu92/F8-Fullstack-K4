var file = document.querySelector(".editor .menu .file-wrap");
var nameFile = document.querySelector("input#name");
var content = document.querySelector(".content[contenteditable]");
var clear = document.querySelector(".clear-content");
var value;

var char = document.querySelector(".count-char");
var word = document.querySelector(".count-word");
char.innerHTML = `Số ký tự: 0`;
word.innerHTML = `Số từ: 0`;
//focus when loading
window.onload = () => {
    content.focus();
}

var countWord = function () {
  if (!value) return 0;
  return value.trim().split(/\s+/).length;
};

var countChar = function () {
  return value.length;
};
//check countchar-word
content.addEventListener("keyup", function () {
  value = content.innerText;
  if (value) {
    clear.classList.add("clear");
  } else {
    if (clear.classList.contains("clear")) clear.classList.remove("clear");
  }
  char.innerHTML = `Số ký tự: ${countChar()}`;
  word.innerHTML = `Số từ: ${countWord()}`;
});
// format paste-text
content.addEventListener("paste", (e) => {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
});

//clear text
clear.addEventListener("click", function () {
  value = "";
  content.innerText = value;
  char.innerHTML = `Số ký tự: 0`;
  word.innerHTML = `Số từ: 0`;
});

//newFile
var newFile = document.querySelector(".new-file");
newFile.addEventListener("click", function () {
  value = "";
  nameFile.value = "Untitled";
  content.innerText = value;
  char.innerHTML = `Số ký tự: 0`;
  word.innerHTML = `Số từ: 0`;
  content.focus();
});


