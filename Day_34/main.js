const getUser = async() => {
    const res = await fetch(`https://vynwf2-8080.csb.app/users`);
    const users = await res.json();
    return users;
}

const postUser = async(data) => {
    const res = await fetch(`https://vynwf2-8080.csb.app/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: `${data}`,
            check: false,
        })
    });
    return res;
};

const inputsearch = document.querySelector("input[type = 'search']");
const addBtn = document.querySelector("button.add-btn");

const list = document.querySelector(".list-todos");


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
            deleteBtn.className = "delete";
            deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
            divIcons.append(deleteBtn);

            const modifyBtn = document.createElement("button");
            modifyBtn.className = "modify";
            modifyBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
            divIcons.append(modifyBtn);

            const checkBtn = document.createElement("button");
            checkBtn.className = "done no-checked";
            checkBtn.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
            divIcons.append(checkBtn);

            todo.append(divIcons);
            list.prepend(todo);        
            
            deleteBtn.addEventListener("click", function() {
                todo.remove();
            });

            checkBtn.addEventListener("click", function() {
                user.check = true;
                checkBtn.classList.remove("no-checked");
            })

        })
    })
}

render();