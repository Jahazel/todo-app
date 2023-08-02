import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoArray, setTodoArray] = useState([]);

  const addTodo = (todoName) => {
    setTodoArray((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), todoName, todoCompleted: false },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodoArray((currentTodo) => {
      return currentTodo.filter((todo) => id != todo.id);
    });
  };

  const toggleTodo = (id, todoCompleted) => {
    setTodoArray((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todoCompleted };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoArray={todoArray}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;
