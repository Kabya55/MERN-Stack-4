import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import INITIAL_TODOS from "./data/INITIAL_TODOS";
import getNextTodoId from "./utils/getNextTodoId";

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const handleChange = (todo) => {
    const chandeTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: todo.title,
          completed: todo.completed,
        };
      }
      return t;
    });
    setTodos(chandeTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAdd = (title) => {
    setTodos([
      ...todos,
      {
        id: getNextTodoId(todos),
        title,
        completed: false,
      },
    ]);
  };

  return (
    <>
      <h1>Simple Todo App</h1>
      <AddTodo onAddTodo={handleAdd} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChange}
        onDeleteTodo={handleDelete}
      />
    </>
  );
}

export default App;
