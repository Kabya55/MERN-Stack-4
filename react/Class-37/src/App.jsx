import { useEffect, useState } from "react";

import "./App.css";
import HandleSubmit from "./Component/HandleSubmit";
import HandleDelete from "./Component/HandleDelete";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);
  return (
    <>
      {/* <form>
        <input type="text" />
        <button type="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </form> */}
      <HandleSubmit />
      <h2>All Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => HandleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
