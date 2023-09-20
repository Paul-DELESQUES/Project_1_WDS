// LES SELECTEURS
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const todoList = document.querySelector(".todo");
// LES INTERACTIONS

button.addEventListener("click", addTodo)

// LES FUNCTIONS

function addTodo(event) {
    event.preventDefault();

    // Créer la section
    const listDiv = document.createElement("div");
    listDiv.classList.add("task");

    // Créer les li de la section qui seraient dans index.html
    const newTask = document.createElement("li"); 
    newTask.classList.add("list-items")
    newTask.innerText = "hello"
    listDiv.appendChild(newTask);

    // Mettre le button valider 
    const confirmButton = document.createElement("button");
    confirmButton.innerHTML = '<i class="fas fa-check"></i>';
    confirmButton.classList.add("confirm-btn");
    listDiv.appendChild(confirmButton);

     // Mettre le button delete
     
     const deleteButton = document.createElement("button");
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add("deleted-btn");
     listDiv.appendChild(deleteButton);

     // Mettre section dans todolist
     todoList.appendChild(listDiv);
    
}