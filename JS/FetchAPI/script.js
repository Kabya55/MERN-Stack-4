function doSomething() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((r) => r.json())
    .then((data) => {
      document.getElementById(
        "result"
      ).innerHTML = `<h2 class="text-2xl font-bold mb-4">${data.title}</h2> <p> ${data.body} </p>`;
    });
}

//Async/Await
// async function doSomething() {
//   const r = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//   const data = await r.json();
//   document.getElementById(
//     "result"
//   ).innerHTML = `<h2 class="text-2xl font-bold mb-4">${data.title}</h2> <p> ${data.body} </p>`;
// }

// dog image api
async function dogImage() {
  const r = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await r.json();
  document.getElementById("dogImage").innerHTML = `<img src="${data.message}">`;
}
