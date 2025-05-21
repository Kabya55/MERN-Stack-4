const header = document.getElementById("header");
// header.textContent = "Kabya's Todo List";
header.innerText = "Kabya's Todo List";
header.style.color = "purple";

let container = document.querySelector("#items");
let listItem = document.querySelector(".item:last-child");
listItem.style.color = "purple";
listItem.style.fontSize = "20px";
let middleItem = document.querySelector(".item:nth-child(2)");
middleItem.style.color = "red";

// Parent to Child
let parent = document.querySelector("#items");
// console.log(parent.querySelectorAll(".item"));

console.log(parent.children);

// Child to Parent
let child = document.querySelector("#items");
console.log(child.parentElement);

// Child to grand Parent
let grandParent = document.querySelector(".item");
console.log(grandParent.closest(".container"));

// Pasa Pasi kono ager kono element k dhora laga

let vi = document.querySelector("#items");
console.log(vi.previousElementSibling);

// Pasa Pasi kono porer kono element k dhora laga
// console.log(vi.nextElementSibling);

// html are vitor kono div banatachila

const newDiv = document.createElement("div");
newDiv.id = "newDiv";
newDiv.className = "newDiv";
newDiv.innerText = "This is a new div";
// newDiv.innerHTML = "<span>This is a new div</span>"; //ai ta use na kora evalo korla hack hober sobombana thaka
const containers = document.querySelector(".todo-list");
// containers.appendChild(newDiv);
// containers.append("Kabya");
containers.append(newDiv, "Kabya");
