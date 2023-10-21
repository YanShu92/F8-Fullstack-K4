const getUser = async () => {
  const res = await fetch(`https://vynwf2-8080.csb.app/users`);
  const task = await res.json();
  return task;
};

const getId = async (nameTask) => {
  const res = await fetch(`https://vynwf2-8080.csb.app/users?name=${nameTask}`);
  const task = await res.json();
  return task;
};

const postUser = async (data) => {
  const res = await fetch(`https://vynwf2-8080.csb.app/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${data}`,
      check: false,
    }),
  });
  return res;
};

const modifyUser = async (data, id) => {
  const res = await fetch(`https://vynwf2-8080.csb.app/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${data}`,
      check: false,
    }),
  });
  return res;
};

const modifyUserCheck = async (data, id) => {
  const res = await fetch(`https://vynwf2-8080.csb.app/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${data}`,
      check: true,
    }),
  });
  return res;
};

const deleteUser = async (id) => {
  const res = await fetch(`https://vynwf2-8080.csb.app/users/${id}`, {
    method: "DELETE",
  });
  return res;
};

const inputSearch = document.querySelector("input[type = 'search']");
const addBtn = document.querySelector("button.add-btn");

const list = document.querySelector(".list-todos");
const todoCompleted = document.querySelector(".btn-completed");
const countCompleted = document.querySelector(".btn-completed .count");
const taskCompleted = document.querySelector(".task-completed");

todoCompleted.addEventListener("click", function () {
  todoCompleted.classList.toggle("active");
  taskCompleted.classList.toggle("show");
});
let count = 0;

inputSearch.addEventListener("keyup", function () {});

addBtn.addEventListener("click", function () {
  const fixTodo = document.createElement("div");
  fixTodo.className = "fix-todo";
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  fixTodo.append(overlay);

  const content = document.createElement("div");
  content.className = "content";
  const text = document.createElement("div");
  text.className = "text";
  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Add todos";
  text.append(inputText);
  content.append(text);

  const fixBtn = document.createElement("div");
  fixBtn.className = "fix-btn";
  const saveBtn = document.createElement("button");
  saveBtn.className = "save";
  saveBtn.innerText = "Save";
  fixBtn.append(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "cancel";
  cancelBtn.innerText = "Cancel";
  fixBtn.append(cancelBtn);
  content.append(fixBtn);
  fixTodo.append(content);

  list.prepend(fixTodo);

  saveBtn.addEventListener("click", function () {
    postUser(inputText.value);
    setTimeout(() => {
      getId(inputText.value).then((users) => {
        const todo = document.createElement("div");
        todo.className = "todo";
        const spanName = document.createElement("span");
        spanName.innerText = inputText.value;
        todo.append(spanName);

        const divIcons = document.createElement("div");
        divIcons.className = "icons";
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        divIcons.append(deleteBtn);

        const modifyBtn = document.createElement("button");
        modifyBtn.type = "button";
        modifyBtn.className = "modify";
        modifyBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        divIcons.append(modifyBtn);

        const checkBtn = document.createElement("button");
        checkBtn.type = "button";
        checkBtn.className = "done no-checked";
        checkBtn.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
        divIcons.append(checkBtn);

        todo.append(divIcons);
        list.prepend(todo);

        deleteBtn.addEventListener("click", function (e) {
          e.preventDefault();
          deleteUser(users[0].id);
          todo.remove();
        });

        checkBtn.addEventListener("click", function (e) {
          e.preventDefault();
          if (users[0].check === false) {
            users[0].check = true;
            checkBtn.classList.remove("no-checked");
            count++;
            countCompleted.innerHTML = count;
            modifyUserCheck(inputText.value, users[0].i);
            todo.remove();
            taskCompleted.append(todo);
          } else {
            users[0].check = false;
            checkBtn.classList.add("no-checked");
            count--;
            countCompleted.innerHTML = count;
            modifyUser(inputText.value, users[0].i);
            todo.remove();
            list.insertBefore(todo, todoCompleted);
          }
        });

        modifyBtn.addEventListener("click", function (e) {
          e.preventDefault();
          const fixTodo = document.createElement("div");
          fixTodo.className = "fix-todo";
          const overlay = document.createElement("div");
          overlay.className = "overlay";
          fixTodo.append(overlay);

          const content = document.createElement("div");
          content.className = "content";
          const text = document.createElement("div");
          text.className = "text";
          const inputTextTask = document.createElement("input");
          inputTextTask.type = "text";
          inputTextTask.value = inputText.value;
          text.append(inputTextTask);
          content.append(text);

          const fixBtn = document.createElement("div");
          fixBtn.className = "fix-btn";
          const saveBtn = document.createElement("button");
          saveBtn.className = "save";
          saveBtn.innerText = "Save";
          fixBtn.append(saveBtn);

          const cancelBtn = document.createElement("button");
          cancelBtn.className = "cancel";
          cancelBtn.innerText = "Cancel";
          fixBtn.append(cancelBtn);
          content.append(fixBtn);
          fixTodo.append(content);

          list.prepend(fixTodo);

          saveBtn.addEventListener("click", function (e) {
            e.preventDefault();
            inputTextTask.value = inputText.value;
            spanName.innerText = inputText.value;
            modifyUser(inputText.value, users[0].i);
            fixTodo.remove();
          });

          cancelBtn.addEventListener("click", function (e) {
            e.preventDefault();
            fixTodo.remove();
          });
        });
      });
    }, 1000);
    fixTodo.remove();
  });

  cancelBtn.addEventListener("click", function () {
    fixTodo.remove();
  });
});

const render = () => {
  getUser().then((users) => {
    users.map((user) => {
      const todo = document.createElement("div");
      todo.className = "todo";
      const spanName = document.createElement("span");
      spanName.innerText = user.name;
      todo.append(spanName);

      const divIcons = document.createElement("div");
      divIcons.className = "icons";
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "delete";
      deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
      divIcons.append(deleteBtn);

      const modifyBtn = document.createElement("button");
      modifyBtn.type = "button";
      modifyBtn.className = "modify";
      modifyBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
      divIcons.append(modifyBtn);

      const checkBtn = document.createElement("button");
      checkBtn.type = "button";
      checkBtn.className = "done no-checked";
      checkBtn.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
      divIcons.append(checkBtn);

      todo.append(divIcons);
      if (user.check) {
        count++;
        countCompleted.innerHTML = count;
        taskCompleted.append(todo);
      } else {
        list.prepend(todo);
      }

      deleteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        deleteUser(user.id);
        todo.remove();
      });

      checkBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (user.check === false) {
          user.check = true;
          checkBtn.classList.remove("no-checked");
          count++;
          countCompleted.innerHTML = count;
          modifyUserCheck(user.name, user.id);
          todo.remove();
          taskCompleted.append(todo);
        } else {
          user.check = false;
          checkBtn.classList.add("no-checked");
          count--;
          countCompleted.innerHTML = count;
          modifyUser(user.name, user.id);
          todo.remove();
          list.insertBefore(todo, todoCompleted);
        }
      });

      modifyBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const fixTodo = document.createElement("div");
        fixTodo.className = "fix-todo";
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        fixTodo.append(overlay);

        const content = document.createElement("div");
        content.className = "content";
        const text = document.createElement("div");
        text.className = "text";
        const inputText = document.createElement("input");
        inputText.type = "text";
        inputText.value = user.name;
        text.append(inputText);
        content.append(text);

        const fixBtn = document.createElement("div");
        fixBtn.className = "fix-btn";
        const saveBtn = document.createElement("button");
        saveBtn.className = "save";
        saveBtn.innerText = "Save";
        fixBtn.append(saveBtn);

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "cancel";
        cancelBtn.innerText = "Cancel";
        fixBtn.append(cancelBtn);
        content.append(fixBtn);
        fixTodo.append(content);

        list.prepend(fixTodo);

        saveBtn.addEventListener("click", function (e) {
          e.preventDefault();
          user.name = inputText.value;
          spanName.innerText = user.name;
          modifyUser(user.name, user.id);
          fixTodo.remove();
        });

        cancelBtn.addEventListener("click", function (e) {
          e.preventDefault();
          fixTodo.remove();
        });
      });
    });
  });
};

window.addEventListener("load", (event) => {
  render();
});
