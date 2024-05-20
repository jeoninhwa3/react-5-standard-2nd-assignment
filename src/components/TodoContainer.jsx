import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      isDone: false,
      title: "리액트",
      content: "공부하기",
    },
    {
      id: 2,
      isDone: true,
      title: "리액트222",
      content: "공부하기222",
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList title="Working!" todos={workingTodos} setTodos={setTodos} />
      <TodoList title="Done!" todos={doneTodos} setTodos={setTodos} />
    </div>
  );
};

export default TodoContainer;
