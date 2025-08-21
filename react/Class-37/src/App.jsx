import "./App.css";
import HandleDelete from "./Component/HandleDelete";
import FaceData from "./Component/FaceData";

function App() {
  return (
    <>
      {/* <form>
        <input type="text" />
        <button type="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </form> */}
      {/* <h2>All Todos</h2> */}
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => HandleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <FaceData />
    </>
  );
}

export default App;
