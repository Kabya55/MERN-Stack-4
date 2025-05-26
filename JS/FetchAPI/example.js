// HTTP GET request using Fetch API
// HTTP are vitor 5 dhoroner call asa
// GET = HTTP VERB
// POST = Resource create
// PUT = Resource update/modify  akhadik jinish k update kora
// PATCH = Resource update/modify  ak ta jinish k update kora
// DELETE = Resource delete

// Fetch API example
const URL = "https://jsonplaceholder.typicode.com/posts/3";
fetch(URL)
  .then((Response) => Response.json()) // Response k short kora sudu 'r' likhe pari
  .then((data) => {
    console.log(data);
  });

// Async/Await way ta Fetch API
const URL1 = "https://jsonplaceholder.typicode.com/posts/2";
const response = await fetch(URL1);
const data = await response.json();
console.log(data);

// // another way to use async/await
async function fetchData() {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

fetchData();
