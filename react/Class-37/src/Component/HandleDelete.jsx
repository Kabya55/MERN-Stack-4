import React from "react";

function HandleDelete({ id, fetchTodos }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetchTodos();
    });
  };
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default HandleDelete;
