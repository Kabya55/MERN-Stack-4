const URL = "http://localhost:3000/books";
async function faceBook() {
  //   const URL = "http://localhost:3000/books";
  const response = await fetch(URL);
  const data = await response.json();
  const bookList = data
    .map((book) => {
      return `<li> <strong>${book.title}</strong> by ${book.author}</li>`;
    })
    .join("");
  document.querySelector("#book-list").innerHTML = bookList;
}

// add Book
async function addBook() {
  //   const URL = "http://localhost:3000/books";
  const title = prompt("Enter book title");
  const author = prompt("Enter book author");
  const id = prompt("Enter book id");
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
      id,
    }),
  });
  faceBook();
}

// put Book/ Update Book
async function updateBook() {
  await fetch(`${URL}/5`, {
    method: "put",
    body: JSON.stringify({
      title: "API for Beginners",
      author: "Kabya Kishor Halder",
    }),
  });
  faceBook();
}

// Patch Book
async function patchBook() {
  await fetch(`${URL}/5`, {
    method: "PATCH",
    body: JSON.stringify({
      title: "API",
    }),
  });
  faceBook();
}

// delete Book
async function deleteBook() {
  await fetch(`${URL}/5`, {
    method: "delete",
  });
  faceBook();
}

faceBook();
