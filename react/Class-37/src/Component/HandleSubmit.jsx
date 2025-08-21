import React, { useState } from "react";

function HandleSubmit({ fetchTodos }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({ title, isCommented: false }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchTodos();
      setTitle("");
    });

    // .then((response) => response.json())
    // .then((data) => console.log("Todo added:", data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HandleSubmit;
