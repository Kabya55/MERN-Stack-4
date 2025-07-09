import React from "react";

function HandleDelete({ id }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Todo deleted:", data));
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default HandleDelete;
