// Click event
let headerElement = document.querySelector("#header");
headerElement.addEventListener("click", function () {
  console.log("Header clicked");
  headerElement.style.color = "blue";
  headerElement.style.fontSize = "30px";
});

// Mouseover event
headerElement.addEventListener("mouseenter", () => {
  console.log("Header mouse entered");
  headerElement.style.color = "purple";
});

// Mouseout event
headerElement.addEventListener("mouseleave", () => {
  console.log("Header mouse left");
  headerElement.style.color = "black";
  headerElement.style.fontSize = "20px";
});

// Keyboard event
const inputElement = document.querySelector("#new-task");

inputElement.addEventListener("keydown", (e) => {
  console.log("Key Down");
});

inputElement.addEventListener("keyup", (e) => {
  console.log("Key Up");
});

inputElement.addEventListener("keypress", (e) => {
  console.log("Key Press");
});

// Focus event
inputElement.addEventListener("focus", (e) => {
  console.log("Field focused");
  inputElement.style.backgroundColor = "lightblue";
});

// Blur event
inputElement.addEventListener("blur", (e) => {
  console.log("Field lost focus");
});

//cut event
inputElement.addEventListener("cut", (e) => {
  console.log("Text cut");
});

// copy event
inputElement.addEventListener("copy", (e) => {
  console.log("Text copied");
});

// paste event
inputElement.addEventListener("paste", (e) => {
  console.log("Text pasted");
});

// inpout event
inputElement.addEventListener("input", (e) => {
  console.log("Input event triggered");
});

// Form submit Page auto reload off event
let formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);
});

//input event
let inputElement2 = document.querySelector("#new-task");
inputElement2.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

// camera event
// const headerElement = document.querySelector("#header");
// const videoElement = document.querySelector("#videoElement");

// headerElement.addEventListener("click", async () => {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     videoElement.srcObject = stream;
//     console.log("ক্যামেরা চালু হয়েছে");
//   } catch (err) {
//     console.error("ক্যামেরা চালু করতে সমস্যা হয়েছে:", err);
//   }
// });
