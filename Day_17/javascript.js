const p = document.getElementById("paraphrase");
var text = p.innerText || p.textContent; // only take content without tagname html

var n = text.length,
  tstart = 0,
  tend = text.indexOf(" ", tstart);
setInterval(function () {
  var leftContent = (tstart === 0) ? text.slice(0, tstart) : text.slice(0, tstart + 1);
  var content = (tstart === 0) ? text.slice(tstart, tend) : text.slice(tstart + 1, tend);
  var rightContent = text.slice(tend);
  content = "<span>" + content + "</span>";
  p.innerHTML = leftContent + content + rightContent;
  content = content.slice(6, content.length - 7);
  tstart = (text.indexOf(" ", tstart + 1) === -1) ? 0 : tend;
  tend = text.indexOf(" ", tstart + 1);
  if (tend === -1) tend = n;
}, 1000);


// Method 2: using split + join
// const p = document.getElementById("paraphrase");
// var text = p.innerText || p.textContent; // only take content without tagname html
// const object = text.split(" ");
// var n = object.length;

// setInterval (function remarkText() {
//   for (let i = 0; i < n; i++) {
//     var newText = object;
//     setTimeout(function () {
//       newText[i] = "<span>" + newText[i] + "</span>";
//       p.innerHTML = newText.join(" ");
//       newText[i] = newText[i].substring(6, newText[i].length - 7);
//     },i * 1000);  
//   }
//   return remarkText;  //  dont delay 1st time setInterval
// }(),n*  1000); //
