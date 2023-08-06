const p = document.getElementById("paraphrase");
var text = p.innerText || p.textContent; // only take content without tagname html
const object = text.split(" ");
var n = object.length;

setInterval (function remarkText() {
  for (let i = 0; i < n; i++) {
    var newText = object;
    setTimeout(function () {
      newText[i] = "<span>" + newText[i] + "</span>";
      p.innerHTML = newText.join(" ");
      newText[i] = newText[i].substring(6, newText[i].length - 7);
    },i * 1000);  
  }
  return remarkText;  //  dont delay 1st time setInterval
}(),n*  1000); //
