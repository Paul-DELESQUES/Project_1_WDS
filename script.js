// LES SELECTEURS
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const todoList = document.querySelector(".todo");
const filterList = document.querySelector(".filter-category");

// LES ECOUTEURS

button.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);
filterList.addEventListener("input", filterCategory);

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

// fonciton qui me permets de valider et supprimer ma tache

function checkDelete(event) {
    const item = event.target;
    const task = item.parentElement; // Obtenez la tâche parente

    if (item.classList.contains("check-btn")) {
        task.classList.toggle("achieved"); // Ajoutez ou supprimez la classe "achieved"
    } else if (item.classList.contains("deleted-btn")) {
        task.classList.add("upGhost");
        task.addEventListener("transitionend", function() {
            task.remove();
        });
    }
}

function filterCategory() {
    const tasks = todoList.querySelectorAll(".task");
    const category = filterList.value;

    tasks.forEach(function (task) {

        switch(category) {
            case "all":
                task.style.display = "flex";
                break;
            case "achieved":
                if (task.classList.contains("achieved")) {
                    task.style.display = "flex";
                } else {
                    task.style.display = "none";
                }
                break;
            case "standby":
                if (!task.classList.contains("achieved")) {
                    task.style.display = "flex";
                } else {
                    task.style.display = "none";
                }
                break;
        }
    });
}
