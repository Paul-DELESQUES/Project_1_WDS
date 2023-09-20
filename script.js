// LES SELECTEURS
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const todoList = document.querySelector(".todo");
// LES INTERACTIONS

button.addEventListener("click", addTodo)

// LES FUNCTIONS

function addTodo(event) {
    event.preventDefault();
    console.log("Je fonctionne");
    // Créer la section
    const listSection = document.createElement("section");
    listSection.classList.add("task");

    // Créer les li de la section qui seraient dans index.html
    const newTask = document.createElement("li");
    newTask.classList.add("list-items")
    newTask.innerText = ""
    listSection.appendChild(newTask);
}