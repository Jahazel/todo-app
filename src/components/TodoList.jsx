import TodoItem from "./TodoItem";

function TodoList({ todoArray, deleteTodo, toggleTodo }) {
  return (
    <>
      <ul>
        {todoArray.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
