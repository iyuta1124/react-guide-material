const List = ({ lists, setLists }) => {
  const complete = (e) => {
    const filterdTodosList = lists.filter(
      (todo) => todo.id !== Number(e.target.id)
    );
    setLists(filterdTodosList);
  };
  return (
    <>
      {lists.map((todo) => {
        return (
          <div key={todo.id}>
            <button id={todo.id} onClick={complete}>
              完了
            </button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </>
  );
};

export default List;
