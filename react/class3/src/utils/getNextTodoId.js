export default function getNextTodoId(todos) {
  if (todos.length === 0) {
    return 1;
  }
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
  return maxId + 1;
}

// export default function getNextTodoId(todos) {
//   if (!Array.isArray(todos)) {
//     throw new TypeError("Input must be an array");
//   }
//   if (todos.length === 0) {
//     return 1;
//   }
//   const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
//   return maxId + 1;
// }
