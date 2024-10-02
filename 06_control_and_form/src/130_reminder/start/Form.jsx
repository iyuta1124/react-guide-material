import { useState } from "react";
const Form = ({ lists, setLists }) => {
  const [text, setText] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    const id = lists.length + 1;
    const newTodoList = [...lists, { id, content: text }];
    setLists(newTodoList);
    setText("");
  };
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button>追加</button>
    </form>
  );
};

export default Form;
