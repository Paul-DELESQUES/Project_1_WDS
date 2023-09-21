// LES SELECTEURS
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const todoList = document.querySelector(".todo");
// LES INTERACTIONS

button.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);

// LES FUNCTIONS

function addTodo(event) {
    event.preventDefault();

    // Créer la div
    const listDiv = document.createElement("div");
    listDiv.classList.add("task");

    // Créer les li de la div qui seraient dans index.html
    const newTask = document.createElement("li"); 
    newTask.classList.add("list-items")
    newTask.innerText = input.value;
    listDiv.appendChild(newTask);

    // Mettre le button valider 
    const confirmButton = document.createElement("button");
    confirmButton.innerHTML = '<i class="fas fa-check"></i>';
    confirmButton.classList.add("check-btn");
    listDiv.appendChild(confirmButton);

     // Mettre le button delete
     
     const deleteButton = document.createElement("button");
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add("deleted-btn");
     listDiv.appendChild(deleteButton);

     // Mettre section dans todolist
     todoList.appendChild(listDiv);
     input.value = '';
}

function checkDelete(event) {
    const item = event.target;
    if (item[0] === "check-btn") {
        item.classList.parentElement.toggle("itemCheck");
    }
        if (item[0] === "deleted-btn") {
            item.parentElement.remove();
    } 
}
