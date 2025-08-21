import React, { useState, useEffect } from "react";
import HandleDelete from "./HandleDelete";
import HandleSubmit from "./HandleSubmit";

function FaceData() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <HandleSubmit fetchTodos={fetchTodos} />
      <h2>All Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <HandleDelete id={todo.id} fetchTodos={fetchTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FaceData;
