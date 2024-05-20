const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim()) {
      return alert("제목과 내용을 모두 입력해주세요.");
    }

    const nextTodo = {
      id: new Date().getTime(),
      isDone: false,
      title,
      content,
    };
    setTodos((prev) => [...prev, nextTodo]);
    e.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="title" type="text" placeholder="제목" />
      <input name="content" type="text" placeholder="내용" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
