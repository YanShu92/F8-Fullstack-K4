var download = document.querySelector("input#download");
var type = document.querySelector("select#extension");

var fileNameDownload = document.querySelector(".download input#name");

download.addEventListener("click", function () {
  if (type.value === ".pdf") {
    const page = content;
    var opt = {
        margin:       1,
        filename:     `${fileNameDownload.value}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(page).save();
  } else if (type.value === ".txt") {
    let textFileAsBlob = new Blob([content.innerHTML], { type: 'text/plain' });
    let downloadLink = document.createElement('a');
    downloadLink.download = `${fileNameDownload.value}.txt`;
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(
            textFileAsBlob
        );
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  }
});
