const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
const search = document.querySelector(".search");
const msg = document.createElement("div");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

// define a speech recognition
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

// thêm thuộc tính nhận diện
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "vi-VN"; // Sử dụng tiếng Việt
recognition.interimResults = false;
recognition.maxAlternatives = 1;

btn.addEventListener("click", function () {
  recognition.start();
  btn.innerText = "Đang lắng nghe...";
  action.innerText = "Hãy nói nội dung bạn muốn";
  if (search.children.length > 3) msg.remove();
});

let text;
let isCheck = false;
// Xử lý sự kiện kết quả
recognition.onresult = (event) => {
  // Lấy chuỗi văn bản đã nhận diện được
  text = event.results[0][0].transcript;
};

// Dừng nhận diện khi giọng nói kết thúc
recognition.onspeechend = () => {
  recognition.stop();
  btn.innerText = "Bấm vào đây để nói";
};

recognition.onend = () => {
  if (text !== undefined) {
    checkResults(text)
  } else {
    isCheck =  false;
  }
  if (isCheck) {
    action.style.color = "green";
    action.innerText = "Đã nói xong. Hy vọng kết quả như ý bạn";
    msg.className = "msg";
    msg.innerText = "Đã thực hiện yêu cầu";
    search.append(msg);
  } else {
    action.style.color = "red";
    action.innerText = "Đã nói xong. Hy vọng kết quả như ý bạn";
    msg.className = "msg error";
    msg.innerText = "Không thực hiện yêu cầu";
    search.append(msg);
  }
};

const checkResults = (result) => {
  result = result.toLowerCase().trim();
  switch (result) {
    case "youtube":
      window.open("https://youtube.com", "_blank");
      isCheck = true;
      break;

    case "facebook":
      window.open("https://facebook.com", "_blank");
      isCheck = true;
      break;

    case "google":
      window.open("https://google.com", "_blank");
      isCheck = true;
      break;

    case "google drive":
      window.open("https://drive.google.com/drive", "_blank");
      isCheck = true;
      break;

    case "google maps":
      window.open("https://www.google.com/maps", "_blank");
      isCheck = true;
      break;

    default:
      isCheck = false;
      break;
  }

  if (
    result.includes("chỉ đường") ||
    result.includes("đường") ||
    result.includes("tới")
  ) {
    if (result.includes("chỉ đường"))
      result = result.replaceAll("chỉ đường", "");
    if (result.includes("đường tới"))
      result = result.replaceAll("đường tới", "");
    if (result.includes("tới")) result = result.replaceAll("tới", "");
    if (result.includes("đến")) result = result.replaceAll("đến", "");
    result = result.trim().replaceAll(" ", "+");
    // fixed địa chỉ đi (21.018864,105.787726) từ F8
    window.open(
      `https://www.google.com/maps/dir/21.018864,105.787726/${result}`,
      "_blank"
    );
    isCheck = true;
  }

  if (result.includes("bài hát")) {
    let index = result.indexOf("bài hát");
    result = result
      .slice(index + 7)
      .trim()
      .replaceAll(" ", "+");
    window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${result}`);
    isCheck = true;
  }

  if (result.includes("video")) {
    let index = result.indexOf("video");
    result = result
      .slice(index + 5)
      .trim()
      .replaceAll(" ", "+");
    window.open(`https://www.youtube.com/results?search_query=${result}`);
    isCheck = true;
  }
};
