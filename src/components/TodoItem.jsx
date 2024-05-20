const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;
  const deleteTodo = () => {
    setTodos((prev) =>
      prev.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id !== id ? todo : { ...todo, isDone: !todo.isDone };
      });
    });
  };
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>

      <div>
        <button onClick={deleteTodo}>삭제</button>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
      </div>
    </>
  );
};

export default TodoItem;
