import { useState } from "react";

const Example = () => {
  const temp = ["Apple", "Banana", "Cherry"];
  const [val, setVal] = useState("Apple");
  const changeHandler = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <select onChange={changeHandler}>
        {temp.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <div>{val}</div>
    </>
  );
};

export default Example;
