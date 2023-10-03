
var undo = document.querySelector(".undo");
var redo = document.querySelector(".redo");
var bold = document.querySelector(".bold");
var italic = document.querySelector(".italic");
var underline = document.querySelector(".underline");
var alignLeft = document.querySelector(".align-left");
var alignCenter = document.querySelector(".align-center");
var alignRight = document.querySelector(".align-right");
var justify = document.querySelector(".justify");
var increaseIndent = document.querySelector(".increase-indent");
var decreaseIndent = document.querySelector(".decrease-indent");
var textColor =  document.querySelector("input#text");

var align = document.querySelectorAll(".align");
var clearAlignShow = function() {
    align.forEach((item) => {
        if (item.classList.contains("show")) {
            item.classList.remove("show");
        };
    });
};

bold.addEventListener("click", function() {
    bold.classList.toggle("show");
    document.execCommand('bold', false, null);
});


italic.addEventListener("click", function() {
    italic.classList.toggle("show");
    document.execCommand('italic', false, null);
});

underline.addEventListener("click", function() {
    underline.classList.toggle("show");
    document.execCommand('underline', false, null);
});

undo.addEventListener("click", function() {
    document.execCommand('undo', false, null);
});

redo.addEventListener("click", function() {
    document.execCommand('redo', false, null);
});

alignLeft.addEventListener("click", function() {
    clearAlignShow();
    alignLeft.classList.add("show");
    document.execCommand('justifyLeft', false, null);
});

alignCenter.addEventListener("click", function() {
    clearAlignShow();
    alignCenter.classList.add("show");
    document.execCommand('justifyCenter', false, null);
});

alignRight.addEventListener("click", function() {
    clearAlignShow();
    alignRight.classList.add("show");
    document.execCommand('justifyRight', false, null);
});

justify.addEventListener("click", function() {
    clearAlignShow();
    justify.classList.add("show");
    document.execCommand('justifyFull', false, null);
});

increaseIndent.addEventListener("click", function() {
    document.execCommand('indent', false, null);
});

decreaseIndent.addEventListener("click", function() {
    document.execCommand('outdent', false, null);
});

textColor.addEventListener("change", function() {
    document.execCommand('foreColor', false, textColor.value);    
})

