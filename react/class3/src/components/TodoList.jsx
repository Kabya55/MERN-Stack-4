import Todo from "./Todo";

export default function TodoList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
