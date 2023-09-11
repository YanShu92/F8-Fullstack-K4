const btnAdd = document.querySelector("button.add-task");
const inputForm = document.querySelector(".input-row input");
const list = document.querySelector("ul.list");



btnAdd.addEventListener("click", function () {
  if (inputForm.value !== "") {

    var li = document.createElement("li");

    let p = document.createElement("p");
    p.innerText = inputForm.value.trim();
    li.appendChild(p);

    let icons = document.createElement("div");
    icons.className = "icons";
    var iModify = document.createElement("i");
    iModify.className = "fa-solid fa-pen-to-square modify";
    var iDelete = document.createElement("i");
    iDelete.className = "fa-solid fa-trash trash";
    icons.appendChild(iModify);
    icons.appendChild(iDelete);
    li.appendChild(icons);
    list.appendChild(li);
    
    var formModify = document.createElement("form");
    formModify.className = "hide";
    var inputModify = document.createElement("input");
    inputModify.type = "text";
    inputModify.value = inputForm.value;
    formModify.appendChild(inputModify);
    var buttonModify = document.createElement("button");
    buttonModify.innerHTML = "Add Task";
    formModify.appendChild(buttonModify);
    list.appendChild(formModify);

    p.addEventListener("click", function() {
      p.classList.toggle("completed");
    });

    iDelete.addEventListener("click", function(e) {
      e.target.parentElement.parentElement.remove();
    })

    iModify.addEventListener("click", function() {
      li.classList.add("hide");
      formModify.classList.remove("hide");
    });

    buttonModify.addEventListener("click", function() {
      li.classList.remove("hide");
      p.innerText = inputModify.value;
      formModify.classList.add("hide");
    })

    formModify.addEventListener('submit', function(e) {
      e.preventDefault();
    })

    inputForm.value = "";
  }
});

const form = document.querySelector("form");
form.addEventListener('submit', function(e) {
  e.preventDefault();
})




