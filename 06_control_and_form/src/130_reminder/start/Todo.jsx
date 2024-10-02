import { useState } from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [lists, setLists] = useState(todosList);

  return (
    <>
      <List lists={lists} setLists={setLists} />
      <Form lists={lists} setLists={setLists}></Form>
    </>
  );
};

export default Todo;
